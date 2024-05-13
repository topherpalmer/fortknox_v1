// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bank, Account, Profile, TrxnAgreement, User } = initSchema(schema);

export {
  Bank,
  Account,
  Profile,
  TrxnAgreement,
  User
};