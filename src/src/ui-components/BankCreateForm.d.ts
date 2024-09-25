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
export declare type BankCreateFormInputValues = {
    name?: string;
};
export declare type BankCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BankCreateFormOverridesProps = {
    BankCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BankCreateFormProps = React.PropsWithChildren<{
    overrides?: BankCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BankCreateFormInputValues) => BankCreateFormInputValues;
    onSuccess?: (fields: BankCreateFormInputValues) => void;
    onError?: (fields: BankCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BankCreateFormInputValues) => BankCreateFormInputValues;
    onValidate?: BankCreateFormValidationValues;
} & React.CSSProperties>;
export default function BankCreateForm(props: BankCreateFormProps): React.ReactElement;
