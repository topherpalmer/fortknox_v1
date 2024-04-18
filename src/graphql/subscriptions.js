/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBank = /* GraphQL */ `
  subscription OnCreateBank($filter: ModelSubscriptionBankFilterInput) {
    onCreateBank(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBank = /* GraphQL */ `
  subscription OnUpdateBank($filter: ModelSubscriptionBankFilterInput) {
    onUpdateBank(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBank = /* GraphQL */ `
  subscription OnDeleteBank($filter: ModelSubscriptionBankFilterInput) {
    onDeleteBank(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
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
      createdAt
      updatedAt
      accountBankId
      __typename
    }
  }
`;
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
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
      createdAt
      updatedAt
      accountBankId
      __typename
    }
  }
`;
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
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
      createdAt
      updatedAt
      accountBankId
      __typename
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onCreateProfile(filter: $filter) {
      id
      type
      name
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onUpdateProfile(filter: $filter) {
      id
      type
      name
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
    onDeleteProfile(filter: $filter) {
      id
      type
      name
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
export const onCreateTrxnAgreement = /* GraphQL */ `
  subscription OnCreateTrxnAgreement(
    $filter: ModelSubscriptionTrxnAgreementFilterInput
  ) {
    onCreateTrxnAgreement(filter: $filter) {
      id
      status
      txnAmount
      dateToSend
      sender {
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
      receiver {
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
      createdAt
      updatedAt
      trxnAgreementSenderId
      trxnAgreementReceiverId
      __typename
    }
  }
`;
export const onUpdateTrxnAgreement = /* GraphQL */ `
  subscription OnUpdateTrxnAgreement(
    $filter: ModelSubscriptionTrxnAgreementFilterInput
  ) {
    onUpdateTrxnAgreement(filter: $filter) {
      id
      status
      txnAmount
      dateToSend
      sender {
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
      receiver {
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
      createdAt
      updatedAt
      trxnAgreementSenderId
      trxnAgreementReceiverId
      __typename
    }
  }
`;
export const onDeleteTrxnAgreement = /* GraphQL */ `
  subscription OnDeleteTrxnAgreement(
    $filter: ModelSubscriptionTrxnAgreementFilterInput
  ) {
    onDeleteTrxnAgreement(filter: $filter) {
      id
      status
      txnAmount
      dateToSend
      sender {
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
      receiver {
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
      createdAt
      updatedAt
      trxnAgreementSenderId
      trxnAgreementReceiverId
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      type
      name
      email
      status
      profile {
        id
        type
        name
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      type
      name
      email
      status
      profile {
        id
        type
        name
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      type
      name
      email
      status
      profile {
        id
        type
        name
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
