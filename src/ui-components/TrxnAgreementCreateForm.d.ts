/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TrxnAgreementCreateFormInputValues = {
    status?: string;
    txnAmount?: string;
    dateToSend?: string;
    senderUserId?: string;
    receiverUserId?: string;
    senderUserName?: string;
    receiverUserName?: string;
};
export declare type TrxnAgreementCreateFormValidationValues = {
    status?: ValidationFunction<string>;
    txnAmount?: ValidationFunction<string>;
    dateToSend?: ValidationFunction<string>;
    senderUserId?: ValidationFunction<string>;
    receiverUserId?: ValidationFunction<string>;
    senderUserName?: ValidationFunction<string>;
    receiverUserName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrxnAgreementCreateFormOverridesProps = {
    TrxnAgreementCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    txnAmount?: PrimitiveOverrideProps<TextFieldProps>;
    dateToSend?: PrimitiveOverrideProps<TextFieldProps>;
    senderUserId?: PrimitiveOverrideProps<TextFieldProps>;
    receiverUserId?: PrimitiveOverrideProps<TextFieldProps>;
    senderUserName?: PrimitiveOverrideProps<TextFieldProps>;
    receiverUserName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrxnAgreementCreateFormProps = React.PropsWithChildren<{
    overrides?: TrxnAgreementCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TrxnAgreementCreateFormInputValues) => TrxnAgreementCreateFormInputValues;
    onSuccess?: (fields: TrxnAgreementCreateFormInputValues) => void;
    onError?: (fields: TrxnAgreementCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrxnAgreementCreateFormInputValues) => TrxnAgreementCreateFormInputValues;
    onValidate?: TrxnAgreementCreateFormValidationValues;
} & React.CSSProperties>;
export default function TrxnAgreementCreateForm(props: TrxnAgreementCreateFormProps): React.ReactElement;
