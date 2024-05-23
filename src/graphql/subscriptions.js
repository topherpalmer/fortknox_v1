/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        businessName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        businessName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        businessName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProfileId
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
      businessName
      accounts {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      businessName
      accounts {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      businessName
      accounts {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accountBankId
      accountAddressId
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
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accountBankId
      accountAddressId
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
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accountBankId
      accountAddressId
      __typename
    }
  }
`;
export const onCreateBank = /* GraphQL */ `
  subscription OnCreateBank($filter: ModelSubscriptionBankFilterInput) {
    onCreateBank(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      trxnAgreementSenderProfileAccountId
      trxnAgreementReceiverProfileAccountId
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
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      trxnAgreementSenderProfileAccountId
      trxnAgreementReceiverProfileAccountId
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
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      trxnAgreementSenderProfileAccountId
      trxnAgreementReceiverProfileAccountId
      __typename
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onCreateAddress(filter: $filter) {
      id
      status
      addressLine1
      addressLine2
      city
      state
      zip
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onUpdateAddress(filter: $filter) {
      id
      status
      addressLine1
      addressLine2
      city
      state
      zip
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
    onDeleteAddress(filter: $filter) {
      id
      status
      addressLine1
      addressLine2
      city
      state
      zip
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
