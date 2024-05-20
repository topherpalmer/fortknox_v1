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
export declare type AddressUpdateFormInputValues = {
    status?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zip?: string;
};
export declare type AddressUpdateFormValidationValues = {
    status?: ValidationFunction<string>;
    addressLine1?: ValidationFunction<string>;
    addressLine2?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    zip?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddressUpdateFormOverridesProps = {
    AddressUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    addressLine1?: PrimitiveOverrideProps<TextFieldProps>;
    addressLine2?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    zip?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AddressUpdateFormProps = React.PropsWithChildren<{
    overrides?: AddressUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    address?: any;
    onSubmit?: (fields: AddressUpdateFormInputValues) => AddressUpdateFormInputValues;
    onSuccess?: (fields: AddressUpdateFormInputValues) => void;
    onError?: (fields: AddressUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AddressUpdateFormInputValues) => AddressUpdateFormInputValues;
    onValidate?: AddressUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AddressUpdateForm(props: AddressUpdateFormProps): React.ReactElement;
