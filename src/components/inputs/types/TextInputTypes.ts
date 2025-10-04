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
export type TGeneralInputType = {
  rhfRegister?: RHFRegister;
  iconClickCallBack?: (value: any) => void;
  defaultValue?: string;
} & HTMLInputType;

export type TBaseInput = {
  type?: "number" | "text" | "password" | "email" | "search";
  inputValue: string;
  thousandSeparate?: boolean;
  setInputFocus: Dispatch<SetStateAction<boolean>>;
} & TGeneralInputType;

export type ErrorText =
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>;

export type TInputBaseType = {
  baseInputBoxClassName?: string;
  size?: "small" | "medium" | "large";
  helperTextIcon?: ReactNode | string;
  errorHelperTextIcon?: ReactNode | string;
  wrapperStyle?: CSSProperties;
  helperText?: string[];
  errorHelperText?: ErrorText;
  error?: boolean;
  haveKeyboard?: boolean;
  numericKeyboard?: boolean;
  label?: string;
  endIcon?: string | ReactNode;
  multiLangKeyboard?: boolean;
  ref?: any;
  setValue?: UseFormSetValue<any>;
  startIcon?: string | ReactNode;
  clearErrors?: UseFormClearErrors<any>;
  rhfOptions?: RegisterOptions<any>;
} & TGeneralInputType;

export type TTextInputWrapper = {
  passwordStrengthCheck?: boolean;
  passwordStrengthCheckStyle?: string;
  defaultValue?: string;
  inputFocus: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  required: boolean;
  thousandSeparate?: boolean;
  setInputValue: Dispatch<SetStateAction<string>>;
  inputValue: string;
  iconVariant?: "contained" | "outlined";
  children: ReactNode;
  passwordIconClassName?: string;
} & Omit<TInputBaseType, keyof HTMLInputType>;

export type TBaseTextInput = {
  startIcon?: string | ReactNode;
  iconVariant?: "contained" | "outlined";
  type?: "text" | "email" | "search";
} & TInputBaseType;

export type TPasswordInput = {
  passwordStrengthCheck?: boolean;
  passwordIcon?: ReactNode;
  passwordStrengthData?: {
    text: string;
    textColor: string;
    borderColor: string;
  }[];
} & TInputBaseType;

export type TBaseNumberInput = {
  thousandSeparate?: boolean;
  iconVariant?: "contained" | "outlined";
} & TInputBaseType;
