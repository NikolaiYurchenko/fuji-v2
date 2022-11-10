// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.15;

/**
 * @title Chief.
 * @author fujidao Labs
 * @notice  Controls vault deploy factories, deployed flashers, vault ratings and core access control.
 * Vault deployer contract with template factory allow.
 * ref: https://github.com/sushiswap/trident/blob/master/contracts/deployer/MasterDeployer.sol
 */

import {AccessControl} from "openzeppelin-contracts/contracts/access/AccessControl.sol";
import {TimelockController} from
  "openzeppelin-contracts/contracts/governance/TimelockController.sol";
import {Address} from "openzeppelin-contracts/contracts/utils/Address.sol";
import {IPausableVault} from "./interfaces/IPausableVault.sol";
import {IVaultFactory} from "./interfaces/IVaultFactory.sol";
import {AddrMapper} from "./helpers/AddrMapper.sol";
import {CoreRoles} from "./access/CoreRoles.sol";

import "forge-std/console.sol";

contract Chief is CoreRoles, AccessControl {
  using Address for address;

  event OpenVaultFactory(bool state);
  event DeployVault(address indexed factory, address indexed vault, bytes deployData);
  event AddedFlasher(address indexed flasher);
  event RemovedFlasher(address indexed flasher);
  event AddedVaultFactory(address indexed factory);
  event RemovedVaultFactory(address indexed factory);
  event TimelockUpdated(address indexed timelock);

  /// @dev Custom Errors
  error Chief__checkInput_zeroAddress();
  error Chief__deployVault_factoryNotAllowed();
  error Chief__deployVault_missingRole(address account, bytes32 role);
  error Chief__onlyTimelock_callerIsNotTimelock();

  address public timelock;
  address public addrMapper;
  bool public openVaultFactory;

  address[] internal _vaults;
  mapping(address => string) public vaultSafetyRating;
  mapping(address => bool) public allowedFactories;
  mapping(address => bool) public allowedFlasher;

  modifier onlyTimelock() {
    console.log("@modifier");
    console.log("msg.sender", msg.sender, "timelock", timelock);
    if (msg.sender != timelock) {
      revert Chief__onlyTimelock_callerIsNotTimelock();
    }
    _;
  }

  constructor() {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _grantRole(PAUSER_ROLE, address(this));
    _grantRole(UNPAUSER_ROLE, address(this));
    _deployAddrMapper();
  }

  function getVaults() external view returns (address[] memory) {
    return _vaults;
  }

  function setTimelock(address newTimelock) external onlyRole(DEFAULT_ADMIN_ROLE) {
    _checkInputIsNotZeroAddress(newTimelock);
    timelock = newTimelock;
    emit TimelockUpdated(newTimelock);
  }

  function setOpenVaultFactory(bool state) external onlyRole(DEFAULT_ADMIN_ROLE) {
    openVaultFactory = state;
    emit OpenVaultFactory(state);
  }

  function deployVault(
    address _factory,
    bytes calldata _deployData,
    string calldata rating
  )
    external
    returns (address vault)
  {
    if (!allowedFactories[_factory]) {
      revert Chief__deployVault_factoryNotAllowed();
    }
    if (!openVaultFactory && !hasRole(DEFAULT_ADMIN_ROLE, msg.sender)) {
      revert Chief__deployVault_missingRole(msg.sender, DEFAULT_ADMIN_ROLE);
    }
    vault = IVaultFactory(_factory).deployVault(_deployData);
    vaultSafetyRating[vault] = rating;
    _vaults.push(vault);
    emit DeployVault(_factory, vault, _deployData);
  }

  function addFlasher(address flasher) external onlyTimelock {
    _checkInputIsNotZeroAddress(flasher);
    allowedFlasher[flasher] = true;
    emit AddedFlasher(flasher);
  }

  function removeFlasher(address flasher) external onlyTimelock {
    _checkInputIsNotZeroAddress(flasher);
    allowedFlasher[flasher] = false;
    emit RemovedFlasher(flasher);
  }

  function addVaultFactory(address _factory) external onlyTimelock {
    _checkInputIsNotZeroAddress(_factory);
    allowedFactories[_factory] = true;
    emit AddedVaultFactory(_factory);
  }

  function removeVaultFactory(address _factory) external onlyTimelock {
    _checkInputIsNotZeroAddress(_factory);
    allowedFactories[_factory] = false;
    emit RemovedVaultFactory(_factory);
  }

  /**
   * @notice Force pauses all actions from all vaults in `_vaults`.
   * Requirement:
   * - Should be restricted to pauser role.
   */
  function pauseForceAllVaults() external onlyRole(PAUSER_ROLE) {
    bytes memory callData = abi.encodeWithSelector(IPausableVault.pauseForceAll.selector);
    _changePauseState(callData);
  }

  /**
   * @notice Resumes all actions by force unpausing all vaults in `_vaults`.
   * Requirement:
   * - Should be restricted to unpauser role.
   */
  function unpauseForceAllVaults() external onlyRole(UNPAUSER_ROLE) {
    bytes memory callData = abi.encodeWithSelector(IPausableVault.unpauseForceAll.selector);
    _changePauseState(callData);
  }

  /**
   * @notice Pauses specific action in all vaults in `_vaults`.
   * @param action Enum: 0-deposit, 1-withdraw, 2-borrow, 3-payback.
   * Requirements:
   * - `action` in all vaults' should be not paused; otherwise revert.
   * - Should be restricted to pauser role.
   */
  function pauseActionInAllVaults(IPausableVault.VaultActions action)
    external
    onlyRole(PAUSER_ROLE)
  {
    bytes memory callData = abi.encodeWithSelector(IPausableVault.pause.selector, action);
    _changePauseState(callData);
  }

  /**
   * @notice Resumes specific `action` by unpausing in all vaults in `_vaults`.
   * @param action Enum: 0-deposit, 1-withdraw, 2-borrow, 3-payback.
   * Requirements:
   * - `action` in all vaults' should be in paused state; otherwise revert.
   * - Should be restricted to pauser role.
   */
  function upauseActionInAllVaults(IPausableVault.VaultActions action)
    external
    onlyRole(UNPAUSER_ROLE)
  {
    bytes memory callData = abi.encodeWithSelector(IPausableVault.unpause.selector, uint8(action));
    _changePauseState(callData);
  }

  /**
   * @dev Deploys 1 {AddrMapper} contract during Chief deployment.
   */
  function _deployAddrMapper() internal {
    addrMapper = address(new AddrMapper{salt: "0x00"}(address(this)));
  }

  /**
   * @dev executes pause state changes.
   */
  function _changePauseState(bytes memory callData) internal {
    uint256 alength = _vaults.length;
    for (uint256 i; i < alength;) {
      address(_vaults[i]).functionCall(callData, ": pause call failed");
      unchecked {
        ++i;
      }
    }
  }

  /**
   * @dev reverts if `input` is zero address.
   */
  function _checkInputIsNotZeroAddress(address input) internal pure {
    if (input == address(0)) {
      revert Chief__checkInput_zeroAddress();
    }
  }
}
