// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Profile, Account, Bank, TrxnAgreement, Address } = initSchema(schema);

export {
  User,
  Profile,
  Account,
  Bank,
  TrxnAgreement,
  Address
};