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
export declare type AccountCreateFormInputValues = {
    routingNumber?: string;
    achNumber?: string;
    accountNumber?: string;
    name?: string;
    bankName?: string;
};
export declare type AccountCreateFormValidationValues = {
    routingNumber?: ValidationFunction<string>;
    achNumber?: ValidationFunction<string>;
    accountNumber?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    bankName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountCreateFormOverridesProps = {
    AccountCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    routingNumber?: PrimitiveOverrideProps<TextFieldProps>;
    achNumber?: PrimitiveOverrideProps<TextFieldProps>;
    accountNumber?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    bankName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccountCreateFormProps = React.PropsWithChildren<{
    overrides?: AccountCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AccountCreateFormInputValues) => AccountCreateFormInputValues;
    onSuccess?: (fields: AccountCreateFormInputValues) => void;
    onError?: (fields: AccountCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccountCreateFormInputValues) => AccountCreateFormInputValues;
    onValidate?: AccountCreateFormValidationValues;
} & React.CSSProperties>;
export default function AccountCreateForm(props: AccountCreateFormProps): React.ReactElement;
