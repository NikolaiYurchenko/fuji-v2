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
} from "../common";

export interface ChiefInterface extends utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "DEPLOYER_ROLE()": FunctionFragment;
    "HARVESTER_ROLE()": FunctionFragment;
    "HOUSE_KEEPER_ROLE()": FunctionFragment;
    "LIQUIDATOR_ROLE()": FunctionFragment;
    "PAUSER_ROLE()": FunctionFragment;
    "REBALANCER_ROLE()": FunctionFragment;
    "UNPAUSER_ROLE()": FunctionFragment;
    "addrMapper()": FunctionFragment;
    "allowFlasher(address,bool)": FunctionFragment;
    "allowVaultFactory(address,bool)": FunctionFragment;
    "allowedFlasher(address)": FunctionFragment;
    "allowedVaultFactory(address)": FunctionFragment;
    "deployVault(address,bytes,uint256)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getVaults()": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "pauseActionInAllVaults(uint8)": FunctionFragment;
    "pauseForceAllVaults()": FunctionFragment;
    "permissionlessDeployments()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setPermissionlessDeployments(bool)": FunctionFragment;
    "setSafetyRating(address,uint256)": FunctionFragment;
    "setTimelock(address)": FunctionFragment;
    "setVaults(address[])": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "timelock()": FunctionFragment;
    "unpauseForceAllVaults()": FunctionFragment;
    "upauseActionInAllVaults(uint8)": FunctionFragment;
    "vaultSafetyRating(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DEFAULT_ADMIN_ROLE"
      | "DEPLOYER_ROLE"
      | "HARVESTER_ROLE"
      | "HOUSE_KEEPER_ROLE"
      | "LIQUIDATOR_ROLE"
      | "PAUSER_ROLE"
      | "REBALANCER_ROLE"
      | "UNPAUSER_ROLE"
      | "addrMapper"
      | "allowFlasher"
      | "allowVaultFactory"
      | "allowedFlasher"
      | "allowedVaultFactory"
      | "deployVault"
      | "getRoleAdmin"
      | "getVaults"
      | "grantRole"
      | "hasRole"
      | "pauseActionInAllVaults"
      | "pauseForceAllVaults"
      | "permissionlessDeployments"
      | "renounceRole"
      | "revokeRole"
      | "setPermissionlessDeployments"
      | "setSafetyRating"
      | "setTimelock"
      | "setVaults"
      | "supportsInterface"
      | "timelock"
      | "unpauseForceAllVaults"
      | "upauseActionInAllVaults"
      | "vaultSafetyRating"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEPLOYER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "HARVESTER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "HOUSE_KEEPER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LIQUIDATOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PAUSER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REBALANCER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNPAUSER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addrMapper",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowFlasher",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "allowVaultFactory",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedFlasher",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedVaultFactory",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deployVault",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getVaults", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pauseActionInAllVaults",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pauseForceAllVaults",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "permissionlessDeployments",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPermissionlessDeployments",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setSafetyRating",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setTimelock", values: [string]): string;
  encodeFunctionData(functionFragment: "setVaults", values: [string[]]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unpauseForceAllVaults",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upauseActionInAllVaults",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultSafetyRating",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEPLOYER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "HARVESTER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "HOUSE_KEEPER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LIQUIDATOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PAUSER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REBALANCER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UNPAUSER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addrMapper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowFlasher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowVaultFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedFlasher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedVaultFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVaults", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pauseActionInAllVaults",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pauseForceAllVaults",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "permissionlessDeployments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPermissionlessDeployments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSafetyRating",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setVaults", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unpauseForceAllVaults",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upauseActionInAllVaults",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vaultSafetyRating",
    data: BytesLike
  ): Result;

  events: {
    "AllowFlasher(address,bool)": EventFragment;
    "AllowPermissionlessDeployments(bool)": EventFragment;
    "AllowVaultFactory(address,bool)": EventFragment;
    "ChangeSafetyRating(address,uint256)": EventFragment;
    "DeployVault(address,address,bytes)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "SetVaults(address[],address[])": EventFragment;
    "UpdateTimelock(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AllowFlasher"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "AllowPermissionlessDeployments"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllowVaultFactory"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangeSafetyRating"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeployVault"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetVaults"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateTimelock"): EventFragment;
}

export interface AllowFlasherEventObject {
  flasher: string;
  allowed: boolean;
}
export type AllowFlasherEvent = TypedEvent<
  [string, boolean],
  AllowFlasherEventObject
>;

export type AllowFlasherEventFilter = TypedEventFilter<AllowFlasherEvent>;

export interface AllowPermissionlessDeploymentsEventObject {
  allowed: boolean;
}
export type AllowPermissionlessDeploymentsEvent = TypedEvent<
  [boolean],
  AllowPermissionlessDeploymentsEventObject
>;

export type AllowPermissionlessDeploymentsEventFilter =
  TypedEventFilter<AllowPermissionlessDeploymentsEvent>;

export interface AllowVaultFactoryEventObject {
  factory: string;
  allowed: boolean;
}
export type AllowVaultFactoryEvent = TypedEvent<
  [string, boolean],
  AllowVaultFactoryEventObject
>;

export type AllowVaultFactoryEventFilter =
  TypedEventFilter<AllowVaultFactoryEvent>;

export interface ChangeSafetyRatingEventObject {
  vault: string;
  newRating: BigNumber;
}
export type ChangeSafetyRatingEvent = TypedEvent<
  [string, BigNumber],
  ChangeSafetyRatingEventObject
>;

export type ChangeSafetyRatingEventFilter =
  TypedEventFilter<ChangeSafetyRatingEvent>;

export interface DeployVaultEventObject {
  factory: string;
  vault: string;
  deployData: string;
}
export type DeployVaultEvent = TypedEvent<
  [string, string, string],
  DeployVaultEventObject
>;

export type DeployVaultEventFilter = TypedEventFilter<DeployVaultEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface SetVaultsEventObject {
  previousVaults: string[];
  newVaults: string[];
}
export type SetVaultsEvent = TypedEvent<
  [string[], string[]],
  SetVaultsEventObject
>;

export type SetVaultsEventFilter = TypedEventFilter<SetVaultsEvent>;

export interface UpdateTimelockEventObject {
  timelock: string;
}
export type UpdateTimelockEvent = TypedEvent<
  [string],
  UpdateTimelockEventObject
>;

export type UpdateTimelockEventFilter = TypedEventFilter<UpdateTimelockEvent>;

export interface Chief extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChiefInterface;

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
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    DEPLOYER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    HARVESTER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    HOUSE_KEEPER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    LIQUIDATOR_ROLE(overrides?: CallOverrides): Promise<[string]>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    REBALANCER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    UNPAUSER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    addrMapper(overrides?: CallOverrides): Promise<[string]>;

    allowFlasher(
      flasher: string,
      allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowVaultFactory(
      factory: string,
      allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowedFlasher(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    allowedVaultFactory(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    deployVault(
      factory: string,
      deployData: BytesLike,
      rating: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getVaults(overrides?: CallOverrides): Promise<[string[]]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    pauseActionInAllVaults(
      action: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pauseForceAllVaults(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    permissionlessDeployments(overrides?: CallOverrides): Promise<[boolean]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPermissionlessDeployments(
      allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSafetyRating(
      vault: string,
      newRating: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTimelock(
      newTimelock: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVaults(
      vaults: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    timelock(overrides?: CallOverrides): Promise<[string]>;

    unpauseForceAllVaults(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upauseActionInAllVaults(
      action: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vaultSafetyRating(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  DEPLOYER_ROLE(overrides?: CallOverrides): Promise<string>;

  HARVESTER_ROLE(overrides?: CallOverrides): Promise<string>;

  HOUSE_KEEPER_ROLE(overrides?: CallOverrides): Promise<string>;

  LIQUIDATOR_ROLE(overrides?: CallOverrides): Promise<string>;

  PAUSER_ROLE(overrides?: CallOverrides): Promise<string>;

  REBALANCER_ROLE(overrides?: CallOverrides): Promise<string>;

  UNPAUSER_ROLE(overrides?: CallOverrides): Promise<string>;

  addrMapper(overrides?: CallOverrides): Promise<string>;

  allowFlasher(
    flasher: string,
    allowed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowVaultFactory(
    factory: string,
    allowed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowedFlasher(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  allowedVaultFactory(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  deployVault(
    factory: string,
    deployData: BytesLike,
    rating: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  getVaults(overrides?: CallOverrides): Promise<string[]>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  pauseActionInAllVaults(
    action: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pauseForceAllVaults(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  permissionlessDeployments(overrides?: CallOverrides): Promise<boolean>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPermissionlessDeployments(
    allowed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSafetyRating(
    vault: string,
    newRating: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTimelock(
    newTimelock: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVaults(
    vaults: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  timelock(overrides?: CallOverrides): Promise<string>;

  unpauseForceAllVaults(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upauseActionInAllVaults(
    action: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vaultSafetyRating(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    DEPLOYER_ROLE(overrides?: CallOverrides): Promise<string>;

    HARVESTER_ROLE(overrides?: CallOverrides): Promise<string>;

    HOUSE_KEEPER_ROLE(overrides?: CallOverrides): Promise<string>;

    LIQUIDATOR_ROLE(overrides?: CallOverrides): Promise<string>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<string>;

    REBALANCER_ROLE(overrides?: CallOverrides): Promise<string>;

    UNPAUSER_ROLE(overrides?: CallOverrides): Promise<string>;

    addrMapper(overrides?: CallOverrides): Promise<string>;

    allowFlasher(
      flasher: string,
      allowed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    allowVaultFactory(
      factory: string,
      allowed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    allowedFlasher(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    allowedVaultFactory(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deployVault(
      factory: string,
      deployData: BytesLike,
      rating: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    getVaults(overrides?: CallOverrides): Promise<string[]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    pauseActionInAllVaults(
      action: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pauseForceAllVaults(overrides?: CallOverrides): Promise<void>;

    permissionlessDeployments(overrides?: CallOverrides): Promise<boolean>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPermissionlessDeployments(
      allowed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setSafetyRating(
      vault: string,
      newRating: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTimelock(newTimelock: string, overrides?: CallOverrides): Promise<void>;

    setVaults(vaults: string[], overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    timelock(overrides?: CallOverrides): Promise<string>;

    unpauseForceAllVaults(overrides?: CallOverrides): Promise<void>;

    upauseActionInAllVaults(
      action: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    vaultSafetyRating(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "AllowFlasher(address,bool)"(
      flasher?: string | null,
      allowed?: null
    ): AllowFlasherEventFilter;
    AllowFlasher(
      flasher?: string | null,
      allowed?: null
    ): AllowFlasherEventFilter;

    "AllowPermissionlessDeployments(bool)"(
      allowed?: null
    ): AllowPermissionlessDeploymentsEventFilter;
    AllowPermissionlessDeployments(
      allowed?: null
    ): AllowPermissionlessDeploymentsEventFilter;

    "AllowVaultFactory(address,bool)"(
      factory?: string | null,
      allowed?: null
    ): AllowVaultFactoryEventFilter;
    AllowVaultFactory(
      factory?: string | null,
      allowed?: null
    ): AllowVaultFactoryEventFilter;

    "ChangeSafetyRating(address,uint256)"(
      vault?: string | null,
      newRating?: null
    ): ChangeSafetyRatingEventFilter;
    ChangeSafetyRating(
      vault?: string | null,
      newRating?: null
    ): ChangeSafetyRatingEventFilter;

    "DeployVault(address,address,bytes)"(
      factory?: string | null,
      vault?: string | null,
      deployData?: null
    ): DeployVaultEventFilter;
    DeployVault(
      factory?: string | null,
      vault?: string | null,
      deployData?: null
    ): DeployVaultEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;

    "SetVaults(address[],address[])"(
      previousVaults?: null,
      newVaults?: null
    ): SetVaultsEventFilter;
    SetVaults(previousVaults?: null, newVaults?: null): SetVaultsEventFilter;

    "UpdateTimelock(address)"(
      timelock?: string | null
    ): UpdateTimelockEventFilter;
    UpdateTimelock(timelock?: string | null): UpdateTimelockEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    DEPLOYER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    HARVESTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    HOUSE_KEEPER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    LIQUIDATOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    REBALANCER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    UNPAUSER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    addrMapper(overrides?: CallOverrides): Promise<BigNumber>;

    allowFlasher(
      flasher: string,
      allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowVaultFactory(
      factory: string,
      allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowedFlasher(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    allowedVaultFactory(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deployVault(
      factory: string,
      deployData: BytesLike,
      rating: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVaults(overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pauseActionInAllVaults(
      action: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pauseForceAllVaults(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    permissionlessDeployments(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPermissionlessDeployments(
      allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSafetyRating(
      vault: string,
      newRating: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTimelock(
      newTimelock: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVaults(
      vaults: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    timelock(overrides?: CallOverrides): Promise<BigNumber>;

    unpauseForceAllVaults(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upauseActionInAllVaults(
      action: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vaultSafetyRating(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DEPLOYER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    HARVESTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    HOUSE_KEEPER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LIQUIDATOR_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PAUSER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REBALANCER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNPAUSER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addrMapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowFlasher(
      flasher: string,
      allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowVaultFactory(
      factory: string,
      allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowedFlasher(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedVaultFactory(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deployVault(
      factory: string,
      deployData: BytesLike,
      rating: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVaults(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pauseActionInAllVaults(
      action: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pauseForceAllVaults(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    permissionlessDeployments(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPermissionlessDeployments(
      allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSafetyRating(
      vault: string,
      newRating: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTimelock(
      newTimelock: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVaults(
      vaults: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpauseForceAllVaults(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upauseActionInAllVaults(
      action: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vaultSafetyRating(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

export interface ChiefMulticall {
  address: string;
  abi: Fragment[];
  functions: FunctionFragment[];

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Call<string>;

  DEPLOYER_ROLE(overrides?: CallOverrides): Call<string>;

  HARVESTER_ROLE(overrides?: CallOverrides): Call<string>;

  HOUSE_KEEPER_ROLE(overrides?: CallOverrides): Call<string>;

  LIQUIDATOR_ROLE(overrides?: CallOverrides): Call<string>;

  PAUSER_ROLE(overrides?: CallOverrides): Call<string>;

  REBALANCER_ROLE(overrides?: CallOverrides): Call<string>;

  UNPAUSER_ROLE(overrides?: CallOverrides): Call<string>;

  addrMapper(overrides?: CallOverrides): Call<string>;

  allowedFlasher(arg0: string, overrides?: CallOverrides): Call<boolean>;

  allowedVaultFactory(arg0: string, overrides?: CallOverrides): Call<boolean>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Call<string>;

  getVaults(overrides?: CallOverrides): Call<string[]>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Call<boolean>;

  permissionlessDeployments(overrides?: CallOverrides): Call<boolean>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Call<boolean>;

  timelock(overrides?: CallOverrides): Call<string>;

  vaultSafetyRating(arg0: string, overrides?: CallOverrides): Call<BigNumber>;
}
