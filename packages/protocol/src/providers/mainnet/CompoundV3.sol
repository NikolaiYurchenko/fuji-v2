// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.15;

import {ILendingProvider} from "../../interfaces/ILendingProvider.sol";
import {IVault} from "../../interfaces/IVault.sol";
import {ICompoundV3} from "../../interfaces/compoundV3/ICompoundV3.sol";
import {IAddrMapper} from "../../interfaces/IAddrMapper.sol";

/**
 * @title Compound III Comet Lending Provider.
 * @author Fujidao Labs
 * @notice This contract allows interaction with CompoundV3.
 * @dev The IAddrMapper needs to be properly configured for CompoundV3
 * See `_getCometMarket`.
 */
contract CompoundV3 is ILendingProvider {
  // Custom errors
  error CompoundV3__invalidVault();
  error CompoundV3__wrongMarket();

  /**
   * @notice Returns the {AddrMapper} contract applicable to this provider.
   */
  function getMapper() public pure returns (IAddrMapper) {
    // TODO Define final address after deployment strategy is set.
    return IAddrMapper(0x2430ab56FB46Bcac05E39aA947d26e8EEF4A881a);
  }

  /**
   * @notice Refer to {ILendingProvider-approveOperator}.
   */
  function approvedOperator(address, address vault) external view returns (address operator) {
    address asset = IVault(vault).asset();
    address debtAsset = IVault(vault).debtAsset();
    operator = getMapper().getAddressNestedMapping(asset, debtAsset);
  }

  /// inheritdoc ILendingProvider
  function deposit(address asset, uint256 amount, address vault) external returns (bool success) {
    ICompoundV3 cMarketV3 = _getCometMarket(vault);
    cMarketV3.supply(asset, amount);
    success = true;
  }

  /// inheritdoc ILendingProvider
  function borrow(address asset, uint256 amount, address vault) external returns (bool success) {
    ICompoundV3 cMarketV3 = _getCometMarket(vault);
    // From Comet docs: "The base asset can be borrowed using the withdraw function"
    cMarketV3.withdraw(asset, amount);
    success = true;
  }

  /// inheritdoc ILendingProvider
  function withdraw(address asset, uint256 amount, address vault) external returns (bool success) {
    ICompoundV3 cMarketV3 = _getCometMarket(vault);
    cMarketV3.withdraw(asset, amount);
    success = true;
  }

  /// inheritdoc ILendingProvider
  function payback(address asset, uint256 amount, address vault) external returns (bool success) {
    ICompoundV3 cMarketV3 = _getCometMarket(vault);
    // From Coment docs: 'supply' the base asset to repay an open borrow of the base asset.
    cMarketV3.supply(asset, amount);
    success = true;
  }

  /**
   * @notice Refer to {ILendingProvider-getDepositRateFor}.
   */
  function getDepositRateFor(address asset, address vault) external view returns (uint256 rate) {
    ICompoundV3 cMarketV3 = _getCometMarket(vault);

    if (asset == cMarketV3.baseToken()) {
      uint256 utilization = cMarketV3.getUtilization();
      // Scaled by 1e9 to return ray(1e27) per ILendingProvider specs, Compound uses base 1e18 number.
      uint256 ratePerSecond = cMarketV3.getSupplyRate(utilization) * 10 ** 9;
      // 31536000 seconds in a `year` = 60 * 60 * 24 * 365.
      rate = ratePerSecond * 31536000;
    } else {
      rate = 0;
    }
  }

  /**
   * @notice Refer to {ILendingProvider-getBorrowRateFor}.
   */
  function getBorrowRateFor(address asset, address vault) external view returns (uint256 rate) {
    ICompoundV3 cMarketV3 = _getCometMarket(vault);

    if (asset == cMarketV3.baseToken()) {
      uint256 utilization = cMarketV3.getUtilization();
      // Scaled by 1e9 to return ray(1e27) per ILendingProvider specs, Compound uses base 1e18 number.
      uint256 ratePerSecond = cMarketV3.getBorrowRate(utilization) * 10 ** 9;
      // 31536000 seconds in a `year` = 60 * 60 * 24 * 365.
      rate = ratePerSecond * 31536000;
    } else {
      revert CompoundV3__wrongMarket();
    }
  }

  /**
   * @notice Refer to {ILendingProvider-getDepositBalance}.
   * @dev The `vault` address is used to obtain the applicable CompoundV3 market.
   */
  function getDepositBalance(address asset, address user, address vault)
    external
    view
    returns (uint256 balance)
  {
    ICompoundV3 cMarketV3 = _getCometMarket(vault);
    return cMarketV3.collateralBalanceOf(user, asset);
  }

  /**
   * @notice Refer to {ILendingProvider-getBorrowBalance}.
   * @dev The `vault` address is used to obtain the applicable CompoundV3 market.
   */
  function getBorrowBalance(address asset, address user, address vault)
    external
    view
    returns (uint256 balance)
  {
    ICompoundV3 cMarketV3 = _getCometMarket(vault);
    if (asset == cMarketV3.baseToken()) {
      balance = cMarketV3.borrowBalanceOf(user);
    }
  }

  /**
   * @dev Returns corresponding Comet Market from passed `vault` address.
   * IAddrMapper must be properly configured, see below:
   *
   * If `vault` is a {BorrowingVault}:
   * - SHOULD return market {IAddrMapper.addressMapping(asset_, debtAsset_)}
   * in where:
   * - Comet.baseToken() == IVault.debtAsset(), and IVault.debtAsset() != address(0).
   * Else if `vault` is a {YieldVault}:
   * - SHOULD return market {IAddrMapper.addressMapping(asset_, debtAsset_)}
   * in where:
   * - Comet.baseToken() == IVault.asset(), and IVault.debtAsset() == address(0).
   */
  function _getCometMarket(address vault) private view returns (ICompoundV3 cMarketV3) {
    if (vault == address(0)) {
      revert CompoundV3__invalidVault();
    }

    address asset = IVault(vault).asset();
    address debtAsset = IVault(vault).debtAsset();
    address market = getMapper().getAddressNestedMapping(asset, debtAsset);

    cMarketV3 = ICompoundV3(market);
  }
}