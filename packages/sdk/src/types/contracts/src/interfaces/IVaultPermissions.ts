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
import type {
  Fragment,
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { Call } from "@hovoh/ethcall";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface IVaultPermissionsInterface extends utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "borrowAllowance(address,address)": FunctionFragment;
    "decreaseBorrowAllowance(address,uint256)": FunctionFragment;
    "decreaseWithdrawAllowance(address,uint256)": FunctionFragment;
    "increaseBorrowAllowance(address,uint256)": FunctionFragment;
    "increaseWithdrawAllowance(address,uint256)": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "permitBorrow(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "permitWithdraw(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "withdrawAllowance(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DOMAIN_SEPARATOR"
      | "borrowAllowance"
      | "decreaseBorrowAllowance"
      | "decreaseWithdrawAllowance"
      | "increaseBorrowAllowance"
      | "increaseWithdrawAllowance"
      | "nonces"
      | "permitBorrow"
      | "permitWithdraw"
      | "withdrawAllowance"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrowAllowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseBorrowAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseWithdrawAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseBorrowAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseWithdrawAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(
    functionFragment: "permitBorrow",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "permitWithdraw",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAllowance",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseBorrowAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseWithdrawAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseBorrowAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseWithdrawAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "permitBorrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "permitWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAllowance",
    data: BytesLike
  ): Result;

  events: {
    "BorrowApproval(address,address,uint256)": EventFragment;
    "WithdrawApproval(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BorrowApproval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawApproval"): EventFragment;
}

export interface BorrowApprovalEventObject {
  owner: string;
  spender: string;
  amount: BigNumber;
}
export type BorrowApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  BorrowApprovalEventObject
>;

export type BorrowApprovalEventFilter = TypedEventFilter<BorrowApprovalEvent>;

export interface WithdrawApprovalEventObject {
  owner: string;
  spender: string;
  amount: BigNumber;
}
export type WithdrawApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  WithdrawApprovalEventObject
>;

export type WithdrawApprovalEventFilter =
  TypedEventFilter<WithdrawApprovalEvent>;

export interface IVaultPermissions extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVaultPermissionsInterface;

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
    DOMAIN_SEPARATOR(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    borrowAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    decreaseBorrowAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decreaseWithdrawAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseBorrowAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseWithdrawAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    permitBorrow(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    permitWithdraw(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  DOMAIN_SEPARATOR(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  borrowAllowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decreaseBorrowAllowance(
    spender: string,
    byAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decreaseWithdrawAllowance(
    spender: string,
    byAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseBorrowAllowance(
    spender: string,
    byAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseWithdrawAllowance(
    spender: string,
    byAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  permitBorrow(
    owner: string,
    spender: string,
    amount: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  permitWithdraw(
    owner: string,
    spender: string,
    amount: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawAllowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    borrowAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decreaseBorrowAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    decreaseWithdrawAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    increaseBorrowAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    increaseWithdrawAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    permitBorrow(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    permitWithdraw(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "BorrowApproval(address,address,uint256)"(
      owner?: string | null,
      spender?: null,
      amount?: null
    ): BorrowApprovalEventFilter;
    BorrowApproval(
      owner?: string | null,
      spender?: null,
      amount?: null
    ): BorrowApprovalEventFilter;

    "WithdrawApproval(address,address,uint256)"(
      owner?: string | null,
      spender?: null,
      amount?: null
    ): WithdrawApprovalEventFilter;
    WithdrawApproval(
      owner?: string | null,
      spender?: null,
      amount?: null
    ): WithdrawApprovalEventFilter;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    borrowAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decreaseBorrowAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decreaseWithdrawAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseBorrowAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseWithdrawAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    permitBorrow(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    permitWithdraw(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    borrowAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decreaseBorrowAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decreaseWithdrawAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseBorrowAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseWithdrawAllowance(
      spender: string,
      byAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nonces(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    permitBorrow(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    permitWithdraw(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawAllowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

export interface IVaultPermissionsMulticall {
  address: string;
  abi: Fragment[];
  functions: FunctionFragment[];

  borrowAllowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Call<BigNumber>;

  nonces(owner: string, overrides?: CallOverrides): Call<BigNumber>;

  withdrawAllowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Call<BigNumber>;
}