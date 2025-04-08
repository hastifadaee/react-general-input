import { useEffect, useState } from "react";
import BaseInput from "../BaseInput/BaseInput";
import { TBaseTextInput } from "../types/TextInputTypes";
import TextInputWrapper from "../TextInputWrapper/TextInputWrapper";
import * as React from "react";

const BaseTextInput = ({
  required = false,
  rhfRegister,
  handleChange,
  haveKeyboard,
  numericKeyboard,
  defaultValue,
  maxLength,
  placeholder,
  type,
  handleBlur,
  disabled,
  ltr,
  name,
  label,
  iconClickCallBack,
  helperText = "",
  error = false,
  className,
  endIcon,
  startIcon,
  iconVariant,
}: TBaseTextInput) => {
  const [inputValue, setInputValue] = useState(defaultValue ?? "");
  const [inputFocus, setInputFocus] = useState(false);
  useEffect(() => {
    setInputValue(defaultValue || "");
  }, [defaultValue]);
  return (
    <TextInputWrapper
      required={required}
      haveKeyboard={haveKeyboard}
      numericKeyboard={numericKeyboard}
      inputValue={inputValue}
      setInputValue={setInputValue}
      label={label}
      type={type ?? "text"}
      error={error}
      helperText={helperText}
      className={className}
      disabled={disabled}
      inputFocus={inputFocus}
      placeholder={placeholder}
      startIcon={startIcon}
      endIcon={endIcon}
      iconClickCallBack={iconClickCallBack}
      iconVariant={iconVariant}
    >
      <BaseInput
        inputValue={inputValue}
        onChange={(e) => {
          rhfRegister?.onChange(e);
          setInputValue(e.target.value);
          handleChange?.(e);
          rhfRegister?.onChange(e);
        }}
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
    </TextInputWrapper>
  );
};
export default BaseTextInput;
