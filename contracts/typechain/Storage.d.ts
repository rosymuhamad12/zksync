/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface StorageInterface extends ethers.utils.Interface {
  functions: {
    "authFacts(address,uint32)": FunctionFragment;
    "balancesToWithdraw(bytes22)": FunctionFragment;
    "blocks(uint32)": FunctionFragment;
    "exited(uint32,uint16)": FunctionFragment;
    "exodusMode()": FunctionFragment;
    "firstPendingWithdrawalIndex()": FunctionFragment;
    "firstPriorityRequestId()": FunctionFragment;
    "getBalanceToWithdraw(address,uint16)": FunctionFragment;
    "hashedBlocks(uint32)": FunctionFragment;
    "hashedVerifiedCommitments(bytes32)": FunctionFragment;
    "numberOfPendingWithdrawals()": FunctionFragment;
    "pendingWithdrawals(uint32)": FunctionFragment;
    "priorityRequests(uint64)": FunctionFragment;
    "totalBlocksCommitted()": FunctionFragment;
    "totalBlocksVerified()": FunctionFragment;
    "totalCommittedPriorityRequests()": FunctionFragment;
    "totalOpenPriorityRequests()": FunctionFragment;
    "upgradePreparationActivationTime()": FunctionFragment;
    "upgradePreparationActive()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "authFacts",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balancesToWithdraw",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "blocks",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exited",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exodusMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "firstPendingWithdrawalIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "firstPriorityRequestId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBalanceToWithdraw",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hashedBlocks",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hashedVerifiedCommitments",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfPendingWithdrawals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingWithdrawals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "priorityRequests",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalBlocksCommitted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalBlocksVerified",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalCommittedPriorityRequests",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalOpenPriorityRequests",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradePreparationActivationTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradePreparationActive",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "authFacts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balancesToWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "blocks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exited", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exodusMode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "firstPendingWithdrawalIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "firstPriorityRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBalanceToWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashedBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashedVerifiedCommitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfPendingWithdrawals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingWithdrawals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priorityRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalBlocksCommitted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalBlocksVerified",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalCommittedPriorityRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalOpenPriorityRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradePreparationActivationTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradePreparationActive",
    data: BytesLike
  ): Result;

  events: {};
}

export class Storage extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: StorageInterface;

  functions: {
    authFacts(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "authFacts(address,uint32)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    balancesToWithdraw(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      balanceToWithdraw: BigNumber;
      gasReserveValue: number;
      0: BigNumber;
      1: number;
    }>;

    "balancesToWithdraw(bytes22)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      balanceToWithdraw: BigNumber;
      gasReserveValue: number;
      0: BigNumber;
      1: number;
    }>;

    blocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      committedAtBlock: number;
      priorityOperations: BigNumber;
      chunks: number;
      withdrawalsDataHash: string;
      commitment: string;
      stateRoot: string;
      0: number;
      1: BigNumber;
      2: number;
      3: string;
      4: string;
      5: string;
    }>;

    "blocks(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      committedAtBlock: number;
      priorityOperations: BigNumber;
      chunks: number;
      withdrawalsDataHash: string;
      commitment: string;
      stateRoot: string;
      0: number;
      1: BigNumber;
      2: number;
      3: string;
      4: string;
      5: string;
    }>;

    exited(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "exited(uint32,uint16)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    exodusMode(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "exodusMode()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    firstPendingWithdrawalIndex(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "firstPendingWithdrawalIndex()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    firstPriorityRequestId(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "firstPriorityRequestId()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getBalanceToWithdraw(
      _address: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getBalanceToWithdraw(address,uint16)"(
      _address: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    hashedBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "hashedBlocks(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    hashedVerifiedCommitments(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "hashedVerifiedCommitments(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    numberOfPendingWithdrawals(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "numberOfPendingWithdrawals()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    pendingWithdrawals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      to: string;
      tokenId: number;
      0: string;
      1: number;
    }>;

    "pendingWithdrawals(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      to: string;
      tokenId: number;
      0: string;
      1: number;
    }>;

    priorityRequests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      opType: number;
      pubData: string;
      expirationBlock: BigNumber;
      0: number;
      1: string;
      2: BigNumber;
    }>;

    "priorityRequests(uint64)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      opType: number;
      pubData: string;
      expirationBlock: BigNumber;
      0: number;
      1: string;
      2: BigNumber;
    }>;

    totalBlocksCommitted(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "totalBlocksCommitted()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    totalBlocksVerified(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "totalBlocksVerified()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    totalCommittedPriorityRequests(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalCommittedPriorityRequests()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    totalOpenPriorityRequests(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalOpenPriorityRequests()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    upgradePreparationActivationTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "upgradePreparationActivationTime()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    upgradePreparationActive(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "upgradePreparationActive()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  authFacts(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "authFacts(address,uint32)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  balancesToWithdraw(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    balanceToWithdraw: BigNumber;
    gasReserveValue: number;
    0: BigNumber;
    1: number;
  }>;

  "balancesToWithdraw(bytes22)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    balanceToWithdraw: BigNumber;
    gasReserveValue: number;
    0: BigNumber;
    1: number;
  }>;

  blocks(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    committedAtBlock: number;
    priorityOperations: BigNumber;
    chunks: number;
    withdrawalsDataHash: string;
    commitment: string;
    stateRoot: string;
    0: number;
    1: BigNumber;
    2: number;
    3: string;
    4: string;
    5: string;
  }>;

  "blocks(uint32)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    committedAtBlock: number;
    priorityOperations: BigNumber;
    chunks: number;
    withdrawalsDataHash: string;
    commitment: string;
    stateRoot: string;
    0: number;
    1: BigNumber;
    2: number;
    3: string;
    4: string;
    5: string;
  }>;

  exited(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "exited(uint32,uint16)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  exodusMode(overrides?: CallOverrides): Promise<boolean>;

  "exodusMode()"(overrides?: CallOverrides): Promise<boolean>;

  firstPendingWithdrawalIndex(overrides?: CallOverrides): Promise<number>;

  "firstPendingWithdrawalIndex()"(overrides?: CallOverrides): Promise<number>;

  firstPriorityRequestId(overrides?: CallOverrides): Promise<BigNumber>;

  "firstPriorityRequestId()"(overrides?: CallOverrides): Promise<BigNumber>;

  getBalanceToWithdraw(
    _address: string,
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getBalanceToWithdraw(address,uint16)"(
    _address: string,
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hashedBlocks(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "hashedBlocks(uint32)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  hashedVerifiedCommitments(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hashedVerifiedCommitments(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  numberOfPendingWithdrawals(overrides?: CallOverrides): Promise<number>;

  "numberOfPendingWithdrawals()"(overrides?: CallOverrides): Promise<number>;

  pendingWithdrawals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    to: string;
    tokenId: number;
    0: string;
    1: number;
  }>;

  "pendingWithdrawals(uint32)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    to: string;
    tokenId: number;
    0: string;
    1: number;
  }>;

  priorityRequests(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    opType: number;
    pubData: string;
    expirationBlock: BigNumber;
    0: number;
    1: string;
    2: BigNumber;
  }>;

  "priorityRequests(uint64)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    opType: number;
    pubData: string;
    expirationBlock: BigNumber;
    0: number;
    1: string;
    2: BigNumber;
  }>;

  totalBlocksCommitted(overrides?: CallOverrides): Promise<number>;

  "totalBlocksCommitted()"(overrides?: CallOverrides): Promise<number>;

  totalBlocksVerified(overrides?: CallOverrides): Promise<number>;

  "totalBlocksVerified()"(overrides?: CallOverrides): Promise<number>;

  totalCommittedPriorityRequests(overrides?: CallOverrides): Promise<BigNumber>;

  "totalCommittedPriorityRequests()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalOpenPriorityRequests(overrides?: CallOverrides): Promise<BigNumber>;

  "totalOpenPriorityRequests()"(overrides?: CallOverrides): Promise<BigNumber>;

  upgradePreparationActivationTime(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "upgradePreparationActivationTime()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  upgradePreparationActive(overrides?: CallOverrides): Promise<boolean>;

  "upgradePreparationActive()"(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    authFacts(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "authFacts(address,uint32)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    balancesToWithdraw(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      balanceToWithdraw: BigNumber;
      gasReserveValue: number;
      0: BigNumber;
      1: number;
    }>;

    "balancesToWithdraw(bytes22)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      balanceToWithdraw: BigNumber;
      gasReserveValue: number;
      0: BigNumber;
      1: number;
    }>;

    blocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      committedAtBlock: number;
      priorityOperations: BigNumber;
      chunks: number;
      withdrawalsDataHash: string;
      commitment: string;
      stateRoot: string;
      0: number;
      1: BigNumber;
      2: number;
      3: string;
      4: string;
      5: string;
    }>;

    "blocks(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      committedAtBlock: number;
      priorityOperations: BigNumber;
      chunks: number;
      withdrawalsDataHash: string;
      commitment: string;
      stateRoot: string;
      0: number;
      1: BigNumber;
      2: number;
      3: string;
      4: string;
      5: string;
    }>;

    exited(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "exited(uint32,uint16)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    exodusMode(overrides?: CallOverrides): Promise<boolean>;

    "exodusMode()"(overrides?: CallOverrides): Promise<boolean>;

    firstPendingWithdrawalIndex(overrides?: CallOverrides): Promise<number>;

    "firstPendingWithdrawalIndex()"(overrides?: CallOverrides): Promise<number>;

    firstPriorityRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    "firstPriorityRequestId()"(overrides?: CallOverrides): Promise<BigNumber>;

    getBalanceToWithdraw(
      _address: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBalanceToWithdraw(address,uint16)"(
      _address: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashedBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "hashedBlocks(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    hashedVerifiedCommitments(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hashedVerifiedCommitments(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    numberOfPendingWithdrawals(overrides?: CallOverrides): Promise<number>;

    "numberOfPendingWithdrawals()"(overrides?: CallOverrides): Promise<number>;

    pendingWithdrawals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      to: string;
      tokenId: number;
      0: string;
      1: number;
    }>;

    "pendingWithdrawals(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      to: string;
      tokenId: number;
      0: string;
      1: number;
    }>;

    priorityRequests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      opType: number;
      pubData: string;
      expirationBlock: BigNumber;
      0: number;
      1: string;
      2: BigNumber;
    }>;

    "priorityRequests(uint64)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      opType: number;
      pubData: string;
      expirationBlock: BigNumber;
      0: number;
      1: string;
      2: BigNumber;
    }>;

    totalBlocksCommitted(overrides?: CallOverrides): Promise<number>;

    "totalBlocksCommitted()"(overrides?: CallOverrides): Promise<number>;

    totalBlocksVerified(overrides?: CallOverrides): Promise<number>;

    "totalBlocksVerified()"(overrides?: CallOverrides): Promise<number>;

    totalCommittedPriorityRequests(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalCommittedPriorityRequests()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalOpenPriorityRequests(overrides?: CallOverrides): Promise<BigNumber>;

    "totalOpenPriorityRequests()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgradePreparationActivationTime(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "upgradePreparationActivationTime()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgradePreparationActive(overrides?: CallOverrides): Promise<boolean>;

    "upgradePreparationActive()"(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    authFacts(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "authFacts(address,uint32)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balancesToWithdraw(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balancesToWithdraw(bytes22)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    blocks(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "blocks(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exited(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exited(uint32,uint16)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exodusMode(overrides?: CallOverrides): Promise<BigNumber>;

    "exodusMode()"(overrides?: CallOverrides): Promise<BigNumber>;

    firstPendingWithdrawalIndex(overrides?: CallOverrides): Promise<BigNumber>;

    "firstPendingWithdrawalIndex()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    firstPriorityRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    "firstPriorityRequestId()"(overrides?: CallOverrides): Promise<BigNumber>;

    getBalanceToWithdraw(
      _address: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBalanceToWithdraw(address,uint16)"(
      _address: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashedBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hashedBlocks(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashedVerifiedCommitments(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hashedVerifiedCommitments(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numberOfPendingWithdrawals(overrides?: CallOverrides): Promise<BigNumber>;

    "numberOfPendingWithdrawals()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingWithdrawals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingWithdrawals(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priorityRequests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "priorityRequests(uint64)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalBlocksCommitted(overrides?: CallOverrides): Promise<BigNumber>;

    "totalBlocksCommitted()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalBlocksVerified(overrides?: CallOverrides): Promise<BigNumber>;

    "totalBlocksVerified()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalCommittedPriorityRequests(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalCommittedPriorityRequests()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalOpenPriorityRequests(overrides?: CallOverrides): Promise<BigNumber>;

    "totalOpenPriorityRequests()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgradePreparationActivationTime(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "upgradePreparationActivationTime()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgradePreparationActive(overrides?: CallOverrides): Promise<BigNumber>;

    "upgradePreparationActive()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    authFacts(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "authFacts(address,uint32)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balancesToWithdraw(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balancesToWithdraw(bytes22)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "blocks(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exited(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "exited(uint32,uint16)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exodusMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "exodusMode()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    firstPendingWithdrawalIndex(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "firstPendingWithdrawalIndex()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    firstPriorityRequestId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "firstPriorityRequestId()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBalanceToWithdraw(
      _address: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBalanceToWithdraw(address,uint16)"(
      _address: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashedBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hashedBlocks(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashedVerifiedCommitments(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hashedVerifiedCommitments(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberOfPendingWithdrawals(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "numberOfPendingWithdrawals()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingWithdrawals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingWithdrawals(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priorityRequests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "priorityRequests(uint64)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalBlocksCommitted(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalBlocksCommitted()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalBlocksVerified(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalBlocksVerified()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalCommittedPriorityRequests(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalCommittedPriorityRequests()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalOpenPriorityRequests(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalOpenPriorityRequests()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    upgradePreparationActivationTime(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "upgradePreparationActivationTime()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    upgradePreparationActive(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "upgradePreparationActive()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
