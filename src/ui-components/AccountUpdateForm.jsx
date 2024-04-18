/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getAccount } from "../graphql/queries";
import { updateAccount } from "../graphql/mutations";
const client = generateClient();
export default function AccountUpdateForm(props) {
  const {
    id: idProp,
    account: accountModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    routingNumber: "",
    achNumber: "",
    accountNumber: "",
    name: "",
    bankName: "",
  };
  const [routingNumber, setRoutingNumber] = React.useState(
    initialValues.routingNumber
  );
  const [achNumber, setAchNumber] = React.useState(initialValues.achNumber);
  const [accountNumber, setAccountNumber] = React.useState(
    initialValues.accountNumber
  );
  const [name, setName] = React.useState(initialValues.name);
  const [bankName, setBankName] = React.useState(initialValues.bankName);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = accountRecord
      ? { ...initialValues, ...accountRecord }
      : initialValues;
    setRoutingNumber(cleanValues.routingNumber);
    setAchNumber(cleanValues.achNumber);
    setAccountNumber(cleanValues.accountNumber);
    setName(cleanValues.name);
    setBankName(cleanValues.bankName);
    setErrors({});
  };
  const [accountRecord, setAccountRecord] = React.useState(accountModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAccount.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAccount
        : accountModelProp;
      setAccountRecord(record);
    };
    queryData();
  }, [idProp, accountModelProp]);
  React.useEffect(resetStateValues, [accountRecord]);
  const validations = {
    routingNumber: [],
    achNumber: [],
    accountNumber: [],
    name: [],
    bankName: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          routingNumber: routingNumber ?? null,
          achNumber: achNumber ?? null,
          accountNumber: accountNumber ?? null,
          name: name ?? null,
          bankName: bankName ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateAccount.replaceAll("__typename", ""),
            variables: {
              input: {
                id: accountRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AccountUpdateForm")}
      {...rest}
    >
      <TextField
        label="Routing number"
        isRequired={false}
        isReadOnly={false}
        value={routingNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              routingNumber: value,
              achNumber,
              accountNumber,
              name,
              bankName,
            };
            const result = onChange(modelFields);
            value = result?.routingNumber ?? value;
          }
          if (errors.routingNumber?.hasError) {
            runValidationTasks("routingNumber", value);
          }
          setRoutingNumber(value);
        }}
        onBlur={() => runValidationTasks("routingNumber", routingNumber)}
        errorMessage={errors.routingNumber?.errorMessage}
        hasError={errors.routingNumber?.hasError}
        {...getOverrideProps(overrides, "routingNumber")}
      ></TextField>
      <TextField
        label="Ach number"
        isRequired={false}
        isReadOnly={false}
        value={achNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              routingNumber,
              achNumber: value,
              accountNumber,
              name,
              bankName,
            };
            const result = onChange(modelFields);
            value = result?.achNumber ?? value;
          }
          if (errors.achNumber?.hasError) {
            runValidationTasks("achNumber", value);
          }
          setAchNumber(value);
        }}
        onBlur={() => runValidationTasks("achNumber", achNumber)}
        errorMessage={errors.achNumber?.errorMessage}
        hasError={errors.achNumber?.hasError}
        {...getOverrideProps(overrides, "achNumber")}
      ></TextField>
      <TextField
        label="Account number"
        isRequired={false}
        isReadOnly={false}
        value={accountNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              routingNumber,
              achNumber,
              accountNumber: value,
              name,
              bankName,
            };
            const result = onChange(modelFields);
            value = result?.accountNumber ?? value;
          }
          if (errors.accountNumber?.hasError) {
            runValidationTasks("accountNumber", value);
          }
          setAccountNumber(value);
        }}
        onBlur={() => runValidationTasks("accountNumber", accountNumber)}
        errorMessage={errors.accountNumber?.errorMessage}
        hasError={errors.accountNumber?.hasError}
        {...getOverrideProps(overrides, "accountNumber")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              routingNumber,
              achNumber,
              accountNumber,
              name: value,
              bankName,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Bank name"
        isRequired={false}
        isReadOnly={false}
        value={bankName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              routingNumber,
              achNumber,
              accountNumber,
              name,
              bankName: value,
            };
            const result = onChange(modelFields);
            value = result?.bankName ?? value;
          }
          if (errors.bankName?.hasError) {
            runValidationTasks("bankName", value);
          }
          setBankName(value);
        }}
        onBlur={() => runValidationTasks("bankName", bankName)}
        errorMessage={errors.bankName?.errorMessage}
        hasError={errors.bankName?.hasError}
        {...getOverrideProps(overrides, "bankName")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || accountModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || accountModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
