import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";













type EagerUser = {
  readonly id: string;
  readonly type?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly status?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly type?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly status?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerProfile = {
  readonly id: string;
  readonly type?: string | null;
  readonly name?: string | null;
  readonly businessName?: string | null;
}

type LazyProfile = {
  readonly id: string;
  readonly type?: string | null;
  readonly name?: string | null;
  readonly businessName?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

type EagerAccount = {
  readonly id: string;
  readonly routingNumber?: string | null;
  readonly achNumber?: string | null;
  readonly accountNumber?: string | null;
  readonly name?: string | null;
  readonly bankName?: string | null;
  readonly profileId: string;
  readonly status?: string | null;
  readonly associatedEmail?: string | null;
}

type LazyAccount = {
  readonly id: string;
  readonly routingNumber?: string | null;
  readonly achNumber?: string | null;
  readonly accountNumber?: string | null;
  readonly name?: string | null;
  readonly bankName?: string | null;
  readonly profileId: string;
  readonly status?: string | null;
  readonly associatedEmail?: string | null;
}

export declare type Account = LazyLoading extends LazyLoadingDisabled ? EagerAccount : LazyAccount

export declare const Account: (new (init: ModelInit<Account>) => Account) & {
  copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}

type EagerBank = {
  readonly id: string;
  readonly name?: string | null;
}

type LazyBank = {
  readonly id: string;
  readonly name?: string | null;
}

export declare type Bank = LazyLoading extends LazyLoadingDisabled ? EagerBank : LazyBank

export declare const Bank: (new (init: ModelInit<Bank>) => Bank) & {
  copyOf(source: Bank, mutator: (draft: MutableModel<Bank>) => MutableModel<Bank> | void): Bank;
}

type EagerTrxnAgreement = {
  readonly id: string;
  readonly status?: string | null;
  readonly txnAmount?: string | null;
  readonly dateToSend?: string | null;
  readonly senderUserId?: string | null;
  readonly receiverUserId?: string | null;
  readonly senderUserName?: string | null;
  readonly receiverUserName?: string | null;
}

type LazyTrxnAgreement = {
  readonly id: string;
  readonly status?: string | null;
  readonly txnAmount?: string | null;
  readonly dateToSend?: string | null;
  readonly senderUserId?: string | null;
  readonly receiverUserId?: string | null;
  readonly senderUserName?: string | null;
  readonly receiverUserName?: string | null;
}

export declare type TrxnAgreement = LazyLoading extends LazyLoadingDisabled ? EagerTrxnAgreement : LazyTrxnAgreement

export declare const TrxnAgreement: (new (init: ModelInit<TrxnAgreement>) => TrxnAgreement) & {
  copyOf(source: TrxnAgreement, mutator: (draft: MutableModel<TrxnAgreement>) => MutableModel<TrxnAgreement> | void): TrxnAgreement;
}

type EagerAddress = {
  readonly id: string;
  readonly status?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
}

type LazyAddress = {
  readonly id: string;
  readonly status?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address) & {
  copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}