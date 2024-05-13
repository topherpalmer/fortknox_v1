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
export declare type AddressCreateFormInputValues = {
    status?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zip?: string;
};
export declare type AddressCreateFormValidationValues = {
    status?: ValidationFunction<string>;
    addressLine1?: ValidationFunction<string>;
    addressLine2?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    zip?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddressCreateFormOverridesProps = {
    AddressCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    addressLine1?: PrimitiveOverrideProps<TextFieldProps>;
    addressLine2?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    zip?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AddressCreateFormProps = React.PropsWithChildren<{
    overrides?: AddressCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AddressCreateFormInputValues) => AddressCreateFormInputValues;
    onSuccess?: (fields: AddressCreateFormInputValues) => void;
    onError?: (fields: AddressCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AddressCreateFormInputValues) => AddressCreateFormInputValues;
    onValidate?: AddressCreateFormValidationValues;
} & React.CSSProperties>;
export default function AddressCreateForm(props: AddressCreateFormProps): React.ReactElement;
