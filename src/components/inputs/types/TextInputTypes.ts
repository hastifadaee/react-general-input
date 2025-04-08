import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";
import { ChangeHandler } from "react-hook-form";

export type TTextInputWrapper = {
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  type?: "number" | "text" | "password" | "email" | "search";
  required: boolean;
  helperText: string;
  error: boolean;
  disabled?: boolean;
  iconClickCallBack?: (value: any) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  startIcon?: string;
  endIcon?: string;
  iconVariant?: "contained" | "outlined";
  className?: string;
  passwordStrengthCheck?: boolean;
  thousandSeparate?: boolean;
  haveKeyboard?: boolean;
  numericKeyboard?: boolean;
  multiLangKeyboard?: boolean;
  children: ReactNode;
  setInputValue: Dispatch<SetStateAction<string>>;
  inputValue: string;
  inputFocus: boolean;
};

export type TGeneralInputType = {
  thousandSeparate?: boolean;
  maxLength?: number;
  rhfRegister?: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    name: string;
    ref: React.Ref<any>;
  };
  placeholder?: string;
  handleBlur?: React.FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
  ltr?: boolean;
  iconClickCallBack?: (value: any) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
};

export type TBaseInput = {
  type?: "number" | "text" | "password" | "search";
  inputValue: string;
  setInputFocus: Dispatch<SetStateAction<boolean>>;
} & TGeneralInputType;

export type TInputBaseType = {
  required?: boolean;
  haveKeyboard?: boolean;
  numericKeyboard?: boolean;
  defaultValue?: string;
  className?: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  endIcon?: string;
} & TGeneralInputType;

export type TBaseTextInput = {
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  startIcon?: string;
  iconVariant?: "contained" | "outlined";
  type?: "text" | "email" | "search";
} & TInputBaseType;

export type TPasswordInput = {
  handleChange?: (input: string) => void;
  passwordStrengthCheck?: boolean;
} & TInputBaseType;

export type TBaseNumberInput = {
  thousandSeparate?:boolean;
  handleChange?: (input: string) => void;
  iconVariant?: "contained" | "outlined";
} & TInputBaseType;
