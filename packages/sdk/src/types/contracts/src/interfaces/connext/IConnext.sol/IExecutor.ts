/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { Fragment, FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";

import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";

export type ExecutorArgsStruct = {
  transferId: BytesLike;
  amount: BigNumberish;
  to: string;
  recovery: string;
  assetId: string;
  originSender: string;
  originDomain: BigNumberish;
  callData: BytesLike;
};

export type ExecutorArgsStructOutput = [
  string,
  BigNumber,
  string,
  string,
  string,
  string,
  number,
  string
] & {
  transferId: string;
  amount: BigNumber;
  to: string;
  recovery: string;
  assetId: string;
  originSender: string;
  originDomain: number;
  callData: string;
};

export interface IExecutorInterface extends utils.Interface {
  functions: {
    "execute((bytes32,uint256,address,address,address,address,uint32,bytes))": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "execute"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "execute",
    values: [ExecutorArgsStruct]
  ): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;

  events: {};
}

export interface IExecutor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IExecutorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    execute(
      _args: ExecutorArgsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  execute(
    _args: ExecutorArgsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    execute(
      _args: ExecutorArgsStruct,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { success: boolean; returnData: string }>;
  };

  filters: {};

  estimateGas: {
    execute(
      _args: ExecutorArgsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      _args: ExecutorArgsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

export interface IExecutorMulticall {
  address: string;
  abi: Fragment[];
  functions: FunctionFragment[];
}
