import { useState } from "react";
import { TPasswordInput } from "../types/TextInputTypes";
import clsx from "clsx";
import BaseInput from "../BaseInput/BaseInput";
import { passwordStrength } from "check-password-strength";
import TextInputWrapper from "../TextInputWrapper/TextInputWrapper";
import * as React from "react";

const BasePasswordInput = ({
  rhfRegister,
  handleChange,
  haveKeyboard,
  defaultValue,
  maxLength,
  placeholder,
  handleBlur,
  disabled,
  ltr = true,
  name,
  iconClickCallBack,
  endIcon,
  className,
  label,
  passwordStrengthCheck,
  helperText = "",
  error= false,
  required = false,
}: TPasswordInput) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue ?? "");
  const passwordStrengthData = [
    { text: "خیلی ضعیف", color: "text-secondary-2" },
    { text: "ضعیف", color: "text-secondary-5" },
    { text: "متوسط", color: "text-lowLevel-0" },
    { text: "قوی", color: "text-success-0" },
  ];
  const passwordCharChecker = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    return value.replace(/[^A-Za-z0-9!@#$%^&*()\-_=+{};:,<.>]/g, "");
  };
  return (
    <TextInputWrapper
      required={required}
      error={error}
      passwordStrengthCheck={true}
      haveKeyboard
      inputValue={inputValue}
      setInputValue={setInputValue}
      type="password"
      className={className}
      label={label}
      helperText={helperText}
      disabled={disabled}
      inputFocus={inputFocus}
      placeholder={placeholder}
    >
      {inputValue && passwordStrengthCheck && (
        <p
          className={clsx(
            passwordStrengthData[passwordStrength(inputValue).id].color,
            "text-danger-0 text-[10px] sm:text-xs md:text-sm flex items-center mt-2 absolute top-[-30px] md:top-[-35px] left-0"
          )}
        >
          {passwordStrengthData[passwordStrength(inputValue).id]?.text}
        </p>
      )}
      <BaseInput
        type={showPassword ? "text" : "password"}
        onChange={(e) => {
          rhfRegister?.onChange(e);
          setInputValue(passwordCharChecker(e));
          handleChange?.(passwordCharChecker(e));
          rhfRegister?.onChange(e);
        }}
        inputValue={inputValue}
        maxLength={maxLength}
        rhfRegister={rhfRegister}
        placeholder={placeholder}
        handleBlur={handleBlur}
        disabled={disabled}
        ltr={ltr}
        name={name}
        iconClickCallBack={iconClickCallBack}
        setInputFocus={setInputFocus}
      />
      <span
        onClick={() => setShowPassword(!showPassword)}
        className={clsx(
          showPassword ? "icon-Eye !text-xl" : "icon-Hide-Password ",
          "inline-flex justify-end items-center text-base cursor-pointer text-primary-6 w-[18px] h-[18px] sm:w-8 sm:h-8 rounded-[100%] ",
          endIcon && "justify-center"
        )}
      />
    </TextInputWrapper>
  );
};
export default BasePasswordInput;
