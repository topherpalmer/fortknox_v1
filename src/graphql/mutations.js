/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
