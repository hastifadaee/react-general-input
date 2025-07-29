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
  helperText = "",
  error = false,
  required = false,
  inputClassName,
  labelClassName,
  name,
  setValue,
  multiLangKeyboard,
  ref,
  startIcon,
  wrapperStyle,
  rhfOptions,
  clearErrors,
  helperTextClassName,
  passwordIconClassName,
  passwordStrengthCheckClassName,
  passwordStrengthData = [
    { text: "خیلی ضعیف", color: "text-secondary-2" },
    { text: "ضعیف", color: "text-secondary-5" },
    { text: "متوسط", color: "text-lowLevel-0" },
    { text: "قوی", color: "text-success-0" },
  ],
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
      wrapperStyle={wrapperStyle}
      inputClassName={inputClassName}
      labelClassName={labelClassName}
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
      ref={ref}
      setValue={setValue}
      startIcon={startIcon}
      clearErrors={clearErrors}
      rhfOptions={rhfOptions}
      helperTextClassName={helperTextClassName}
    >
      {inputValue && passwordStrengthCheck && (
        <p
          className={clsx(
            "text-[10px] sm:text-xs md:text-sm flex items-center mt-2 absolute top-[-30px] md:top-[-35px] left-0",
            passwordStrengthCheckClassName,
            passwordStrengthData[passwordStrength(inputValue).id].color
          )}
        >
          {passwordStrengthData[passwordStrength(inputValue).id]?.text}
        </p>
      )}
      <BaseInput
        {...props}
        type={showPassword ? "text" : "password"}
        onChange={(e) => {
          rhfRegister?.onChange(e);
          setInputValue(passwordCharChecker(e));
          onChange?.({
            ...e,
            target: { ...e.target, value: passwordCharChecker(e) },
          });
          rhfRegister?.onChange(e);
        }}
        inputValue={inputValue}
        rhfRegister={rhfRegister}
        iconClickCallBack={iconClickCallBack}
        setInputFocus={setInputFocus}
        required={required}
        name={name}
        placeholder={placeholder}
      />
      <span
        onClick={() => setShowPassword(!showPassword)}
        className={clsx(
          showPassword ? "icon-Eye !text-xl" : "icon-Hide-Password ",
          "inline-flex justify-end items-center text-base cursor-pointer text-primary-6 w-[18px] h-[18px] sm:w-8 sm:h-8 rounded-[100%] ",
          endIcon && "justify-center",
          passwordIconClassName
        )}
      />
    </TextInputWrapper>
  );
};
export default BasePasswordInput;
