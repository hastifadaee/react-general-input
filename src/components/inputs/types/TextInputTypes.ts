import { FormikErrors } from "formik";
import {
  CSSProperties,
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";
import {
  ChangeHandler,
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions,
  UseFormClearErrors,
  UseFormSetValue,
} from "react-hook-form";

export type HTMLInputType = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "type" | "defaultValue" | "autoComplete" | "size"
>;
export type RHFRegister = {
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
  ref: React.Ref<HTMLInputElement>;
};

export type FormAdapter = {
  name: string;
  value: any;
  onChange?: (val: { target: any; type?: any }) => void;
  onBlur?: () => void;
  ref?: React.Ref<HTMLInputElement>;
};

export type TGeneralInputType = {
  rhfRegister?: RHFRegister;
  formAdapter?: FormAdapter;
  iconClickCallBack?: (value: any) => void;
} & HTMLInputType;

export type TBaseInput = {
  type?: "number" | "text" | "password" | "email" | "search";
  inputValue: string;
  thousandSeparate?: boolean;
  setInputFocus: Dispatch<SetStateAction<boolean>>;
  defaultValue?: string;
} & TGeneralInputType;

export type ErrorText =
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>;

export type TFormikSetValue = (
  field: string,
  value: any,
  shouldValidate?: boolean | undefined,
) => Promise<void | FormikErrors<{
  identifier: string;
}>>;

export type TInputBaseType = {
  required?: boolean;
  size?: "small" | "medium" | "large";
  helperTextIcon?: ReactNode | string;
  errorHelperTextIcon?: ReactNode | string;
  wrapperStyle?: CSSProperties;
  helperText?: ReactNode[];
  errorHelperText?: ErrorText;
  error?: boolean;
  haveKeyboard?: boolean;
  numericKeyboard?: boolean;
  label?: string;
  endIcon?: string | ReactNode;
  multiLangKeyboard?: boolean;
  ref?: any;
  setValue?: UseFormSetValue<any> | TFormikSetValue;
  startIcon?: string | ReactNode;
  clearErrors?: UseFormClearErrors<any>;
  rhfOptions?: RegisterOptions<any>;
} & TGeneralInputType;

export type TGeneralWrapperType = {
  setInputValue: Dispatch<SetStateAction<string>>;
  inputValue: string;
  type?: "string" | "number";
  defaultValue?: string | number;
};

export type TTextInputWrapper = {
  isPassword?: boolean;
  passwordStrengthCheck?: boolean;
  passwordStrengthCheckStyle?: string;
  inputFocus: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  required: boolean;
  thousandSeparate?: boolean;
  iconVariant?: "contained" | "outlined";
  children: ReactNode;
  passwordIconClassName?: string;
} & TGeneralWrapperType &
  Omit<TInputBaseType, keyof HTMLInputType>;

export type TBaseTextInput = {
  startIcon?: string | ReactNode;
  iconVariant?: "contained" | "outlined";
  type?: "text" | "email" | "search";
  defaultValue?: string;
} & TInputBaseType;

export type TPasswordInput = {
  passwordStrengthCheck?: boolean;
  passwordIcon?: ReactNode;
  passwordStrengthData?: {
    text: string;
    textColor: string;
    borderColor: string;
  }[];
  defaultValue?: string;
} & TInputBaseType;

export type TBaseNumberInput = {
  thousandSeparate?: boolean;
  iconVariant?: "contained" | "outlined";
  defaultValue?: number | string;
} & TInputBaseType;
