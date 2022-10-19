// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.15;

import "forge-std/console.sol";
import {IERC20} from "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol";
import {YieldVault} from "../../src/vaults/yield/YieldVault.sol";
import {BeefyVelodromesETHETHOptimism} from
  "../../src/providers/optimism/BeefyVelodromesETHETHOptimism.sol";
import {IWETH9} from "../../src/helpers/PeripheryPayments.sol";
import {IVault} from "../../src/interfaces/IVault.sol";
import {ILendingProvider} from "../../src/interfaces/ILendingProvider.sol";
import {Chief} from "../../src/Chief.sol";
import {CoreRoles} from "../../src/access/CoreRoles.sol";
import {TimeLock} from "../../src/access/TimeLock.sol";
import {DSTestPlus} from "../utils/DSTestPlus.sol";

contract VaultTest is DSTestPlus, CoreRoles {
  address alice = address(0xA);
  address bob = address(0xB);

  uint256 optimismFork;

  IVault public vault;
  IWETH9 public weth;
  Chief public chief;
  TimeLock public timelock;

  function setUp() public {
    optimismFork = vm.createSelectFork("optimism");

    vm.label(address(alice), "alice");
    vm.label(address(bob), "bob");
    vm.label(0xa132DAB612dB5cB9fC9Ac426A0Cc215A3423F9c9, "UniswapV2Solidly");
    vm.label(0xf92129fE0923d766C2540796d4eA31Ff9FF65522, "BeefyVault");

    weth = IWETH9(0x4200000000000000000000000000000000000006);

    chief = new Chief();
    timelock = TimeLock(payable(chief.timelock()));

    vault =
      new YieldVault(address(weth), address(chief), "Fuji-V2 WETH YieldVault Shares", "fyvWETH");
    ILendingProvider beefy = new BeefyVelodromesETHETHOptimism();
    ILendingProvider[] memory providers = new ILendingProvider[](1);
    providers[0] = beefy;
    _utils_setupVaultProvider(vault, providers);
    vault.setActiveProvider(beefy);
  }

  function _utils_setupTestRoles() internal {
    // Grant this test address all roles.
    chief.grantRole(TIMELOCK_PROPOSER_ROLE, address(this));
    chief.grantRole(TIMELOCK_EXECUTOR_ROLE, address(this));
    chief.grantRole(REBALANCER_ROLE, address(this));
    chief.grantRole(LIQUIDATOR_ROLE, address(this));
  }

  function _utils_callWithTimeLock(bytes memory sendData, IVault vault_) internal {
    timelock.schedule(address(vault_), 0, sendData, 0x00, 0x00, 1.5 days);
    vm.warp(block.timestamp + 2 days);
    timelock.execute(address(vault_), 0, sendData, 0x00, 0x00);
    rewind(2 days);
  }

  function _utils_setupVaultProvider(IVault vault_, ILendingProvider[] memory providers_) internal {
    _utils_setupTestRoles();
    bytes memory sendData = abi.encodeWithSelector(IVault.setProviders.selector, providers_);
    _utils_callWithTimeLock(sendData, vault_);
  }

  function test_depositAndWithdraw() public {
    uint256 amount = 0.5 ether;
    deal(address(weth), alice, amount);

    vm.startPrank(alice);

    SafeERC20.safeApprove(IERC20(address(weth)), address(vault), amount);
    vault.deposit(amount, alice);

    assertEq(vault.balanceOf(alice), amount);
    vault.withdraw(vault.maxWithdraw(alice), alice, alice);
    assertEq(vault.balanceOf(alice), 0);
  }
}
