/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";
import type {
  ERC165,
  ERC165Interface,
  ERC165Multicall,
} from "../../../../../../lib/openzeppelin-contracts/contracts/utils/introspection/ERC165";
import { Contract as MulticallContract } from "@hovoh/ethcall";
const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export class ERC165__factory {
  static readonly abi = _abi;
  static createInterface(): ERC165Interface {
    return new utils.Interface(_abi) as ERC165Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC165 {
    return new Contract(address, _abi, signerOrProvider) as ERC165;
  }
  static multicall(address: string): ERC165Multicall {
    return new MulticallContract(address, _abi) as unknown as ERC165Multicall;
  }
}
