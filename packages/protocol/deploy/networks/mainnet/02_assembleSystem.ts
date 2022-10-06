import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction, Address } from 'hardhat-deploy/types';
import { ASSETS } from '../../utils/assets';
import {CONNEXT} from '../../utils/connext';

import deployFujiOracle,
{ getAssetAddresses, getPriceFeedAddresses } from '../../tasks/deployFujiOracle';
import deploySimpleRouter from '../../tasks/deploySimpleRouter';
import deployConnextRouter from '../../tasks/deployConnextRouter';

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const assets: Address[] = getAssetAddresses('mainnet');
  const priceFeeds: Address[] = getPriceFeedAddresses('mainnet');

  await deployFujiOracle(hre, assets, priceFeeds);
  await deploySimpleRouter(hre, ASSETS['mainnet'].WETH.address);
  await deployConnextRouter(hre, ASSETS['mainnet'].WETH.address, CONNEXT['mainnet'].handler);
};

export default func;
func.tags = ['Assemble'];
