/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";
import type {
  FlasherAaveV3,
  FlasherAaveV3Interface,
  FlasherAaveV3Multicall,
} from "../../../src/flashloans/FlasherAaveV3";
import { Contract as MulticallContract } from "@hovoh/ethcall";
const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "aaveV3Pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BaseFlasher__invalidEntryPoint",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseFlasher__invalidFlashloanType",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseFlasher__lastActionMustBeSwap",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseFlasher__notAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseFlasher__notEmptyEntryPoint",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "computeFlashloanFee",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "executeOperation",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "flasherProviderName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getFlashloanSourceAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "requestor",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "requestorCalldata",
        type: "bytes",
      },
    ],
    name: "initiateFlashloan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export class FlasherAaveV3__factory {
  static readonly abi = _abi;
  static createInterface(): FlasherAaveV3Interface {
    return new utils.Interface(_abi) as FlasherAaveV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlasherAaveV3 {
    return new Contract(address, _abi, signerOrProvider) as FlasherAaveV3;
  }
  static multicall(address: string): FlasherAaveV3Multicall {
    return new MulticallContract(
      address,
      _abi
    ) as unknown as FlasherAaveV3Multicall;
  }
}
