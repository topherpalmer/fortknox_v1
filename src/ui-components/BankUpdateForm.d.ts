/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Bank } from "../models";
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
export declare type BankUpdateFormInputValues = {
    name?: string;
};
export declare type BankUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BankUpdateFormOverridesProps = {
    BankUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BankUpdateFormProps = React.PropsWithChildren<{
    overrides?: BankUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bank?: Bank;
    onSubmit?: (fields: BankUpdateFormInputValues) => BankUpdateFormInputValues;
    onSuccess?: (fields: BankUpdateFormInputValues) => void;
    onError?: (fields: BankUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BankUpdateFormInputValues) => BankUpdateFormInputValues;
    onValidate?: BankUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BankUpdateForm(props: BankUpdateFormProps): React.ReactElement;
