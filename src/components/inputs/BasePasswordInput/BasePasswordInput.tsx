"use client";
import { useState } from "react";
import { TPasswordInput } from "../types/TextInputTypes";
import clsx from "clsx";
import BaseInput from "../BaseInput/BaseInput";
import { passwordStrength } from "check-password-strength";
import TextInputWrapper from "../TextInputWrapper/TextInputWrapper";

const BasePasswordInput = ({
  rhfRegister,
  haveKeyboard = false,
  defaultValue,
  placeholder,
  onChange,
  disabled,
  iconClickCallBack,
  endIcon,
  className,
  label,
  passwordStrengthCheck,
  helperText = [],
  error = false,
  required = false,
  name,
  setValue,
  multiLangKeyboard,
  ref,
  startIcon,
  wrapperStyle,
  rhfOptions,
  clearErrors,
  helperTextIcon,
  errorHelperText = "",
  errorHelperTextIcon,
  passwordIcon,
  formAdapter,
  passwordStrengthData = [
    {
      text: "خیلی ضعیف",
      textColor: "!text-secondary-2",
      borderColor: "!border-secondary-2",
    },
    {
      text: "ضعیف",
      textColor: "!text-secondary-5",
      borderColor: "!border-secondary-5",
    },
    {
      text: "متوسط",
      textColor: "!text-lowLevel-0",
      borderColor: "!border-lowLevel-0",
    },
    {
      text: "قوی",
      textColor: "!text-success-0",
      borderColor: "!border-success-0",
    },
  ],
  size,
  ...props
}: TPasswordInput) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue ?? "");
  const passwordCharChecker = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    return value.replace(/[^A-Za-z0-9!@#$%^&*()\-_=+{};:,<.>]/g, "");
  };
  return (
    <TextInputWrapper
      isPassword={true}
      passwordStrengthCheckStyle={clsx(
        inputValue &&
          passwordStrengthCheck &&
          passwordStrengthData[passwordStrength(inputValue).id].borderColor,
      )}
      passwordStrengthCheck={(inputValue && passwordStrengthCheck) as boolean}
      errorHelperText={errorHelperText}
      errorHelperTextIcon={errorHelperTextIcon}
      size={size}
      helperTextIcon={helperTextIcon}
      wrapperStyle={wrapperStyle}
      required={required}
      error={error}
      haveKeyboard={false}
      inputValue={inputValue}
      setInputValue={setInputValue}
      className={className}
      label={label}
      helperText={helperText}
      disabled={disabled}
      inputFocus={inputFocus}
      placeholder={placeholder}
      defaultValue={defaultValue}
      endIcon={endIcon}
      iconClickCallBack={iconClickCallBack}
      multiLangKeyboard={multiLangKeyboard}
      rhfRegister={rhfRegister}
      formAdapter={formAdapter}
      ref={ref}
      setValue={setValue}
      startIcon={startIcon}
      clearErrors={clearErrors}
      rhfOptions={rhfOptions}
    >
      {inputValue && passwordStrengthCheck && (
        <p
          className={clsx(
            "text-[10px] sm:text-xs md:text-sm flex items-center mt-2 absolute top-[-30px] md:top-[-35px] left-0 rgi-passwordStrengthCheck",
            passwordStrengthData[passwordStrength(inputValue).id].textColor,
          )}
        >
          {passwordStrengthData[passwordStrength(inputValue).id]?.text}
        </p>
      )}
      <BaseInput
        {...props}
        formAdapter={formAdapter}
        required={required}
        type={showPassword ? "text" : "password"}
        onChange={(e) => {
          rhfRegister?.onChange(e);
          formAdapter?.onChange?.(e);
          setInputValue(passwordCharChecker(e));
          formAdapter && setValue?.(formAdapter.name, e.target.value);
          onChange?.({
            ...e,
            target: { ...e.target, value: passwordCharChecker(e) },
          });
          rhfRegister?.onChange(e);
          formAdapter?.onChange?.(e);
        }}
        inputValue={inputValue}
        rhfRegister={rhfRegister}
        iconClickCallBack={iconClickCallBack}
        setInputFocus={setInputFocus}
        name={name}
        placeholder={placeholder}
      />
      <span
        onClick={() => setShowPassword(!showPassword)}
        className={clsx(
          showPassword ? "icon-eye text-xl" : "icon-eye-off",
          "rgi-passwordIcon inline-flex justify-end items-center text-base cursor-pointer text-primary-6 w-[18px] h-[18px] sm:w-8 sm:h-8 rounded-[100%] ",
          endIcon && "justify-center",
        )}
      >
        {passwordIcon}
      </span>
    </TextInputWrapper>
  );
};
export default BasePasswordInput;
