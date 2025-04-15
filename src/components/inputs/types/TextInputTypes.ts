import {
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";
import {
  ChangeHandler,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
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

export type TInputBaseType<TFieldValues extends FieldValues = FieldValues> = {
  labelClassName?: string;
  inputClassName?: string;
  helperText?: ErrorText;
  error?: boolean;
  haveKeyboard?: boolean;
  numericKeyboard?: boolean;
  label?: string;
  endIcon?: string;
  clearErrors?: UseFormClearErrors<TFieldValues>;
  multiLangKeyboard?: boolean;
  rhfOptions?: RegisterOptions<TFieldValues>;
  ref?: any;
  setValue?: UseFormSetValue<TFieldValues>;
  startIcon?: string;
} & TGeneralInputType;

export type TTextInputWrapper<TFieldValues extends FieldValues = FieldValues> = {
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
} & Omit<TInputBaseType<TFieldValues>, keyof HTMLInputType>;

export type TBaseTextInput<TFieldValues extends FieldValues = FieldValues> = {
  startIcon?: string;
  iconVariant?: "contained" | "outlined";
  type?: "text" | "email" | "search";
} & TInputBaseType<TFieldValues>;

export type TPasswordInput<TFieldValues extends FieldValues = FieldValues> = {
  passwordStrengthCheck?: boolean;
} & TInputBaseType<TFieldValues>;

export type TBaseNumberInput<TFieldValues extends FieldValues = FieldValues> = {
  thousandSeparate?: boolean;
  iconVariant?: "contained" | "outlined";
} & TInputBaseType<TFieldValues>;
