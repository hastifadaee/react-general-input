import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";
import { ChangeHandler } from "react-hook-form";

export type HTMLInputType = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "type" | "defaultValue"
>;

export type TTextInputWrapper = {
  labelClassName?: string;
  inputClassName?: string;
  defaultValue?: string;
  inputValue: string;
  inputFocus: boolean;
  label?: string;
  helperText: string;
  error: boolean;
  thousandSeparate?: boolean;
  haveKeyboard?: boolean;
  numericKeyboard?: boolean;
  iconClickCallBack?: (value: any) => void;
  multiLangKeyboard?: boolean;
  children: ReactNode;
  iconVariant?: "contained" | "outlined";
  setInputValue: Dispatch<SetStateAction<string>>;
  startIcon?: string;
  endIcon?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  placeholder?: string;
  required: boolean;
};

export type TGeneralInputType = {
  thousandSeparate?: boolean;
  rhfRegister?: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    name: string;
    ref: React.Ref<any>;
  };
  iconClickCallBack?: (value: any) => void;
  defaultValue?: string;
} & HTMLInputType;

export type TBaseInput = {
  type?: "number" | "text" | "password" | "search";
  inputValue: string;
  setInputFocus: Dispatch<SetStateAction<boolean>>;
} & TGeneralInputType;

export type TInputBaseType = {
  labelClassName?: string;
  inputClassName?: string;
  haveKeyboard?: boolean;
  numericKeyboard?: boolean;
  label?: string;
  helperText?: string;
  error?: boolean;
  endIcon?: string;
} & TGeneralInputType;

export type TBaseTextInput = {
  startIcon?: string;
  iconVariant?: "contained" | "outlined";
  type?: "text" | "email" | "search";
} & TInputBaseType;

export type TPasswordInput = {
  passwordStrengthCheck?: boolean;
} & TInputBaseType;

export type TBaseNumberInput = {
  thousandSeparate?: boolean;
  iconVariant?: "contained" | "outlined";
} & TInputBaseType;
