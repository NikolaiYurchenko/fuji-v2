// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.15;

import {LibSolmateFixedPointMath} from "./LibSolmateFixedPointMath.sol";
import {ICToken} from "../interfaces/Ovix/ICToken.sol";

/**
 * @title Ovix latest ICToken data.
 * @author Fujidao Labs
 * @notice This implementation is modifed from "./LibCompoundV2".
 * @notice Inspired and modified from Transmissions11 (https://github.com/transmissions11/libcompound)
 */
library LibOvix {
  using LibSolmateFixedPointMath for uint256;

  /**
   * @dev Returns the current collateral balance of user
   * @param cToken ICToken 0vix's cToken associated with the user's position
   * @param user address of the user
   */
  function viewUnderlyingBalanceOf(ICToken cToken, address user) internal view returns (uint256) {
    return cToken.balanceOf(user).mulWadDown(viewExchangeRate(cToken));
  }

  /**
   * @dev Returns the current borrow balance of user
   * @param cToken ICToken 0vix's cToken associated with the user's position
   * @param user address of the user
   */
  function viewBorrowingBalanceOf(ICToken cToken, address user) internal view returns (uint256) {
    uint256 borrowIndexPrior = cToken.borrowIndex();
    uint256 borrowIndex = viewNewBorrowIndex(cToken);
    uint256 storedBorrowBalance = cToken.borrowBalanceStored(user);
    return ((storedBorrowBalance * borrowIndex) / borrowIndexPrior);
  }

  /**
   * @dev Returns the current exchange rate for a given cToken
   * @param cToken ICToken 0vix's cToken associated with the user's position
   * @dev 0vix's cToken uses accrualBlockTimestamp instead of accrualBlockNumber (like compound does)
   */
  function viewExchangeRate(ICToken cToken) internal view returns (uint256) {
    uint256 accrualBlockTimestampPrior = cToken.accrualBlockTimestamp();

    if (accrualBlockTimestampPrior == block.timestamp) return cToken.exchangeRateStored();

    uint256 totalCash = cToken.getCash();
    uint256 borrowsPrior = cToken.totalBorrows();
    uint256 reservesPrior = cToken.totalReserves();

    uint256 borrowRateMantissa = cToken.borrowRatePerTimestamp();

    require(borrowRateMantissa <= 0.0005e16, "RATE_TOO_HIGH"); // Same as borrowRateMaxMantissa in ICTokenInterfaces.sol

    uint256 interestAccumulated =
      (borrowRateMantissa * (block.timestamp - accrualBlockTimestampPrior)).mulWadDown(borrowsPrior);

    uint256 totalReserves =
      cToken.reserveFactorMantissa().mulWadDown(interestAccumulated) + reservesPrior;
    uint256 totalBorrows = interestAccumulated + borrowsPrior;
    uint256 totalSupply = cToken.totalSupply();

    // Reverts if totalSupply == 0
    return (totalCash + totalBorrows - totalReserves).divWadDown(totalSupply);
  }

  /**
   * @dev Returns the current borrow index for a given cToken
   * @param cToken ICToken 0vix's cToken associated with the user's position
   * @dev 0vix's cToken uses accrualBlockTimestamp instead of accrualBlockNumber (like compound does)
   */
  function viewNewBorrowIndex(ICToken cToken) internal view returns (uint256 newBorrowIndex) {
    /* Remember the initial block timestamp */
    uint256 currentBlockTimestamp = block.timestamp;
    uint256 accrualBlockTimestampPrior = cToken.accrualBlockTimestamp();

    /* Read the previous values out of storage */
    uint256 borrowIndexPrior = cToken.borrowIndex();

    /* Short-circuit accumulating 0 interest */
    if (accrualBlockTimestampPrior == currentBlockTimestamp) {
      newBorrowIndex = borrowIndexPrior;
    }

    /* Calculate the current borrow interest rate */
    uint256 borrowRateMantissa = cToken.borrowRatePerTimestamp();
    require(borrowRateMantissa <= 0.0005e16, "RATE_TOO_HIGH"); // Same as borrowRateMaxMantissa in ICTokenInterfaces.sol

    /* Calculate the number of timestamps elapsed since the last accrual */
    uint256 blockDelta = currentBlockTimestamp - accrualBlockTimestampPrior;

    uint256 simpleInterestFactor = borrowRateMantissa * blockDelta;
    newBorrowIndex = (simpleInterestFactor * borrowIndexPrior) / 1e18 + borrowIndexPrior;
  }
}
