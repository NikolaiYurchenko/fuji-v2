// SPDX-License-Identifier: GPL-3.0-or-later-only
pragma solidity >=0.8.9;

/// @dev Custom Errors
error Unauthorized();
error ZeroAddress();
error InvalidTokenOrder();

/// @notice Vault deployer for whitelisted template factories.
abstract contract VaultDeployer {
  address public immutable chief;

  mapping(address => address[]) public vaultsByAsset;
  mapping(bytes32 => address) public configAddress;

  modifier onlyChief() {
    if (msg.sender != chief) revert Unauthorized();
    _;
  }

  constructor(address _chief) {
    if (_chief == address(0)) revert ZeroAddress();
    chief = _chief;
  }

  function _registerVault(address vault, address asset, bytes32 salt) internal onlyChief {
    // Store the address of the deployed contract.
    configAddress[salt] = vault;
    vaultsByAsset[asset].push(vault);
  }

  function vaultsCount(address asset) external view returns (uint256 count) {
    count = vaultsByAsset[asset].length;
  }

  function getVaults(address asset, uint256 startIndex, uint256 count)
    external
    view
    returns (address[] memory vaults)
  {
    vaults = new address[](count);
    for (uint256 i = 0; i < count; i++) {
      vaults[i] = vaultsByAsset[asset][startIndex + i];
    }
  }
}