/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { TrxnAgreement } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function TrxnAgreementCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    status: "",
    txnAmount: "",
    dateToSend: "",
    senderUserId: "",
    receiverUserId: "",
    senderUserName: "",
    receiverUserName: "",
  };
  const [status, setStatus] = React.useState(initialValues.status);
  const [txnAmount, setTxnAmount] = React.useState(initialValues.txnAmount);
  const [dateToSend, setDateToSend] = React.useState(initialValues.dateToSend);
  const [senderUserId, setSenderUserId] = React.useState(
    initialValues.senderUserId
  );
  const [receiverUserId, setReceiverUserId] = React.useState(
    initialValues.receiverUserId
  );
  const [senderUserName, setSenderUserName] = React.useState(
    initialValues.senderUserName
  );
  const [receiverUserName, setReceiverUserName] = React.useState(
    initialValues.receiverUserName
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStatus(initialValues.status);
    setTxnAmount(initialValues.txnAmount);
    setDateToSend(initialValues.dateToSend);
    setSenderUserId(initialValues.senderUserId);
    setReceiverUserId(initialValues.receiverUserId);
    setSenderUserName(initialValues.senderUserName);
    setReceiverUserName(initialValues.receiverUserName);
    setErrors({});
  };
  const validations = {
    status: [],
    txnAmount: [],
    dateToSend: [],
    senderUserId: [],
    receiverUserId: [],
    senderUserName: [],
    receiverUserName: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          status,
          txnAmount,
          dateToSend,
          senderUserId,
          receiverUserId,
          senderUserName,
          receiverUserName,
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
          await DataStore.save(new TrxnAgreement(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TrxnAgreementCreateForm")}
      {...rest}
    >
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status: value,
              txnAmount,
              dateToSend,
              senderUserId,
              receiverUserId,
              senderUserName,
              receiverUserName,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Txn amount"
        isRequired={false}
        isReadOnly={false}
        value={txnAmount}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              txnAmount: value,
              dateToSend,
              senderUserId,
              receiverUserId,
              senderUserName,
              receiverUserName,
            };
            const result = onChange(modelFields);
            value = result?.txnAmount ?? value;
          }
          if (errors.txnAmount?.hasError) {
            runValidationTasks("txnAmount", value);
          }
          setTxnAmount(value);
        }}
        onBlur={() => runValidationTasks("txnAmount", txnAmount)}
        errorMessage={errors.txnAmount?.errorMessage}
        hasError={errors.txnAmount?.hasError}
        {...getOverrideProps(overrides, "txnAmount")}
      ></TextField>
      <TextField
        label="Date to send"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={dateToSend && convertToLocal(new Date(dateToSend))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              status,
              txnAmount,
              dateToSend: value,
              senderUserId,
              receiverUserId,
              senderUserName,
              receiverUserName,
            };
            const result = onChange(modelFields);
            value = result?.dateToSend ?? value;
          }
          if (errors.dateToSend?.hasError) {
            runValidationTasks("dateToSend", value);
          }
          setDateToSend(value);
        }}
        onBlur={() => runValidationTasks("dateToSend", dateToSend)}
        errorMessage={errors.dateToSend?.errorMessage}
        hasError={errors.dateToSend?.hasError}
        {...getOverrideProps(overrides, "dateToSend")}
      ></TextField>
      <TextField
        label="Sender user id"
        isRequired={false}
        isReadOnly={false}
        value={senderUserId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              txnAmount,
              dateToSend,
              senderUserId: value,
              receiverUserId,
              senderUserName,
              receiverUserName,
            };
            const result = onChange(modelFields);
            value = result?.senderUserId ?? value;
          }
          if (errors.senderUserId?.hasError) {
            runValidationTasks("senderUserId", value);
          }
          setSenderUserId(value);
        }}
        onBlur={() => runValidationTasks("senderUserId", senderUserId)}
        errorMessage={errors.senderUserId?.errorMessage}
        hasError={errors.senderUserId?.hasError}
        {...getOverrideProps(overrides, "senderUserId")}
      ></TextField>
      <TextField
        label="Receiver user id"
        isRequired={false}
        isReadOnly={false}
        value={receiverUserId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              txnAmount,
              dateToSend,
              senderUserId,
              receiverUserId: value,
              senderUserName,
              receiverUserName,
            };
            const result = onChange(modelFields);
            value = result?.receiverUserId ?? value;
          }
          if (errors.receiverUserId?.hasError) {
            runValidationTasks("receiverUserId", value);
          }
          setReceiverUserId(value);
        }}
        onBlur={() => runValidationTasks("receiverUserId", receiverUserId)}
        errorMessage={errors.receiverUserId?.errorMessage}
        hasError={errors.receiverUserId?.hasError}
        {...getOverrideProps(overrides, "receiverUserId")}
      ></TextField>
      <TextField
        label="Sender user name"
        isRequired={false}
        isReadOnly={false}
        value={senderUserName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              txnAmount,
              dateToSend,
              senderUserId,
              receiverUserId,
              senderUserName: value,
              receiverUserName,
            };
            const result = onChange(modelFields);
            value = result?.senderUserName ?? value;
          }
          if (errors.senderUserName?.hasError) {
            runValidationTasks("senderUserName", value);
          }
          setSenderUserName(value);
        }}
        onBlur={() => runValidationTasks("senderUserName", senderUserName)}
        errorMessage={errors.senderUserName?.errorMessage}
        hasError={errors.senderUserName?.hasError}
        {...getOverrideProps(overrides, "senderUserName")}
      ></TextField>
      <TextField
        label="Receiver user name"
        isRequired={false}
        isReadOnly={false}
        value={receiverUserName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              txnAmount,
              dateToSend,
              senderUserId,
              receiverUserId,
              senderUserName,
              receiverUserName: value,
            };
            const result = onChange(modelFields);
            value = result?.receiverUserName ?? value;
          }
          if (errors.receiverUserName?.hasError) {
            runValidationTasks("receiverUserName", value);
          }
          setReceiverUserName(value);
        }}
        onBlur={() => runValidationTasks("receiverUserName", receiverUserName)}
        errorMessage={errors.receiverUserName?.errorMessage}
        hasError={errors.receiverUserName?.hasError}
        {...getOverrideProps(overrides, "receiverUserName")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
