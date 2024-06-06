/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createBank = /* GraphQL */ `
  mutation CreateBank(
    $input: CreateBankInput!
    $condition: ModelBankConditionInput
  ) {
    createBank(input: $input, condition: $condition) {
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
export const updateBank = /* GraphQL */ `
  mutation UpdateBank(
    $input: UpdateBankInput!
    $condition: ModelBankConditionInput
  ) {
    updateBank(input: $input, condition: $condition) {
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
export const deleteBank = /* GraphQL */ `
  mutation DeleteBank(
    $input: DeleteBankInput!
    $condition: ModelBankConditionInput
  ) {
    deleteBank(input: $input, condition: $condition) {
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
export const createTrxnAgreement = /* GraphQL */ `
  mutation CreateTrxnAgreement(
    $input: CreateTrxnAgreementInput!
    $condition: ModelTrxnAgreementConditionInput
  ) {
    createTrxnAgreement(input: $input, condition: $condition) {
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
export const updateTrxnAgreement = /* GraphQL */ `
  mutation UpdateTrxnAgreement(
    $input: UpdateTrxnAgreementInput!
    $condition: ModelTrxnAgreementConditionInput
  ) {
    updateTrxnAgreement(input: $input, condition: $condition) {
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
export const deleteTrxnAgreement = /* GraphQL */ `
  mutation DeleteTrxnAgreement(
    $input: DeleteTrxnAgreementInput!
    $condition: ModelTrxnAgreementConditionInput
  ) {
    deleteTrxnAgreement(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
