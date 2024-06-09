import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly status?: string | null;
  readonly profile?: Profile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userProfileId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly status?: string | null;
  readonly profile: AsyncItem<Profile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userProfileId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly name?: string | null;
  readonly businessName?: string | null;
  readonly accounts?: (Account | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly name?: string | null;
  readonly businessName?: string | null;
  readonly accounts: AsyncCollection<Account>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

type EagerAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly routingNumber?: string | null;
  readonly achNumber?: string | null;
  readonly accountNumber?: string | null;
  readonly name?: string | null;
  readonly bankName?: string | null;
  readonly bank?: Bank | null;
  readonly profileId: string;
  readonly status?: string | null;
  readonly associatedEmail?: string | null;
  readonly address?: Address | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountBankId?: string | null;
  readonly accountAddressId?: string | null;
}

type LazyAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly routingNumber?: string | null;
  readonly achNumber?: string | null;
  readonly accountNumber?: string | null;
  readonly name?: string | null;
  readonly bankName?: string | null;
  readonly bank: AsyncItem<Bank | undefined>;
  readonly profileId: string;
  readonly status?: string | null;
  readonly associatedEmail?: string | null;
  readonly address: AsyncItem<Address | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountBankId?: string | null;
  readonly accountAddressId?: string | null;
}

export declare type Account = LazyLoading extends LazyLoadingDisabled ? EagerAccount : LazyAccount

export declare const Account: (new (init: ModelInit<Account>) => Account) & {
  copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}

type EagerBank = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bank, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBank = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bank, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bank = LazyLoading extends LazyLoadingDisabled ? EagerBank : LazyBank

export declare const Bank: (new (init: ModelInit<Bank>) => Bank) & {
  copyOf(source: Bank, mutator: (draft: MutableModel<Bank>) => MutableModel<Bank> | void): Bank;
}

type EagerTrxnAgreement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TrxnAgreement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status?: string | null;
  readonly txnAmount?: string | null;
  readonly dateToSend?: string | null;
  readonly senderProfileAccount?: Account | null;
  readonly receiverProfileAccount?: Account | null;
  readonly senderUserId?: string | null;
  readonly receiverUserId?: string | null;
  readonly senderUserName?: string | null;
  readonly receiverUserName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly trxnAgreementSenderProfileAccountId?: string | null;
  readonly trxnAgreementReceiverProfileAccountId?: string | null;
}

type LazyTrxnAgreement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TrxnAgreement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status?: string | null;
  readonly txnAmount?: string | null;
  readonly dateToSend?: string | null;
  readonly senderProfileAccount: AsyncItem<Account | undefined>;
  readonly receiverProfileAccount: AsyncItem<Account | undefined>;
  readonly senderUserId?: string | null;
  readonly receiverUserId?: string | null;
  readonly senderUserName?: string | null;
  readonly receiverUserName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly trxnAgreementSenderProfileAccountId?: string | null;
  readonly trxnAgreementReceiverProfileAccountId?: string | null;
}

export declare type TrxnAgreement = LazyLoading extends LazyLoadingDisabled ? EagerTrxnAgreement : LazyTrxnAgreement

export declare const TrxnAgreement: (new (init: ModelInit<TrxnAgreement>) => TrxnAgreement) & {
  copyOf(source: TrxnAgreement, mutator: (draft: MutableModel<TrxnAgreement>) => MutableModel<TrxnAgreement> | void): TrxnAgreement;
}

type EagerAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address) & {
  copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}