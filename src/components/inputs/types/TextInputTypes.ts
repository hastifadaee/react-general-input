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
  "value" | "type" | "defaultValue" | "autoComplete"
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
  wrapperStyle?: CSSProperties;
  labelClassName?: string;
  inputClassName?: string;
  helperText?: ErrorText;
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
  helperTextClassName?: string;
} & TGeneralInputType;

export type TTextInputWrapper = {
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
  passwordIconClassName?: string;
  passwordStrengthCheckClassName?: string;
  passwordStrengthData?: { text: string; color: string }[];
} & TInputBaseType;

export type TBaseNumberInput = {
  thousandSeparate?: boolean;
  iconVariant?: "contained" | "outlined";
} & TInputBaseType;
