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
export declare type TrxnAgreementUpdateFormInputValues = {
    status?: string;
    txnAmount?: string;
    dateToSend?: string;
};
export declare type TrxnAgreementUpdateFormValidationValues = {
    status?: ValidationFunction<string>;
    txnAmount?: ValidationFunction<string>;
    dateToSend?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrxnAgreementUpdateFormOverridesProps = {
    TrxnAgreementUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    txnAmount?: PrimitiveOverrideProps<TextFieldProps>;
    dateToSend?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrxnAgreementUpdateFormProps = React.PropsWithChildren<{
    overrides?: TrxnAgreementUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    trxnAgreement?: any;
    onSubmit?: (fields: TrxnAgreementUpdateFormInputValues) => TrxnAgreementUpdateFormInputValues;
    onSuccess?: (fields: TrxnAgreementUpdateFormInputValues) => void;
    onError?: (fields: TrxnAgreementUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrxnAgreementUpdateFormInputValues) => TrxnAgreementUpdateFormInputValues;
    onValidate?: TrxnAgreementUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TrxnAgreementUpdateForm(props: TrxnAgreementUpdateFormProps): React.ReactElement;
