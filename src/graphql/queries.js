/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      type
      name
      email
      status
      profile {
        id
        type
        name
        businessName
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userProfileId
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        name
        email
        status
        createdAt
        updatedAt
        userProfileId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      type
      name
      businessName
      accounts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        name
        businessName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      routingNumber
      achNumber
      accountNumber
      name
      bankName
      bank {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      profileId
      status
      associatedEmail
      address {
        id
        status
        addressLine1
        addressLine2
        city
        state
        zip
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      accountBankId
      accountAddressId
      __typename
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        routingNumber
        achNumber
        accountNumber
        name
        bankName
        profileId
        status
        associatedEmail
        createdAt
        updatedAt
        accountBankId
        accountAddressId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const accountsByProfileId = /* GraphQL */ `
  query AccountsByProfileId(
    $profileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountsByProfileId(
      profileId: $profileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        routingNumber
        achNumber
        accountNumber
        name
        bankName
        profileId
        status
        associatedEmail
        createdAt
        updatedAt
        accountBankId
        accountAddressId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBank = /* GraphQL */ `
  query GetBank($id: ID!) {
    getBank(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBanks = /* GraphQL */ `
  query ListBanks(
    $filter: ModelBankFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBanks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTrxnAgreement = /* GraphQL */ `
  query GetTrxnAgreement($id: ID!) {
    getTrxnAgreement(id: $id) {
      id
      status
      txnAmount
      dateToSend
      senderProfileAccount {
        id
        routingNumber
        achNumber
        accountNumber
        name
        bankName
        profileId
        status
        associatedEmail
        createdAt
        updatedAt
        accountBankId
        accountAddressId
        __typename
      }
      receiverProfileAccount {
        id
        routingNumber
        achNumber
        accountNumber
        name
        bankName
        profileId
        status
        associatedEmail
        createdAt
        updatedAt
        accountBankId
        accountAddressId
        __typename
      }
      senderUserId
      receiverUserId
      senderUserName
      receiverUserName
      createdAt
      updatedAt
      trxnAgreementSenderProfileAccountId
      trxnAgreementReceiverProfileAccountId
      __typename
    }
  }
`;
export const listTrxnAgreements = /* GraphQL */ `
  query ListTrxnAgreements(
    $filter: ModelTrxnAgreementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrxnAgreements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        txnAmount
        dateToSend
        senderUserId
        receiverUserId
        senderUserName
        receiverUserName
        createdAt
        updatedAt
        trxnAgreementSenderProfileAccountId
        trxnAgreementReceiverProfileAccountId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      status
      addressLine1
      addressLine2
      city
      state
      zip
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        addressLine1
        addressLine2
        city
        state
        zip
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
