import { useEffect, useState } from "react";
import BaseInput from "../BaseInput/BaseInput";
import { TBaseTextInput } from "../types/TextInputTypes";
import TextInputWrapper from "../TextInputWrapper/TextInputWrapper";

const BaseTextInput = ({
  required = false,
  rhfRegister,
  onChange,
  haveKeyboard,
  numericKeyboard,
  defaultValue,
  maxLength,
  placeholder,
  type,
  onBlur,
  disabled,
  dir,
  name,
  label,
  iconClickCallBack,
  helperText = [],
  error = false,
  className,
  endIcon,
  startIcon,
  iconVariant,
  multiLangKeyboard,
  ref,
  setValue,
  wrapperStyle,
  clearErrors,
  rhfOptions,
  helperTextIcon,
  size,
  errorHelperText = "",
  errorHelperTextIcon,
  baseInputBoxClassName,
  labelClassName,
  ...props
}: TBaseTextInput) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue ?? "");
  const [inputFocus, setInputFocus] = useState(false);
  useEffect(() => {
    setInputValue(defaultValue || "");
  }, [defaultValue]);
  return (
    <TextInputWrapper
      baseInputBoxClassName={baseInputBoxClassName}
      errorHelperText={errorHelperText}
      errorHelperTextIcon={errorHelperTextIcon}
      size={size}
      helperTextIcon={helperTextIcon}
      wrapperStyle={wrapperStyle}
      required={required}
      haveKeyboard={haveKeyboard}
      numericKeyboard={numericKeyboard}
      inputValue={inputValue}
      setInputValue={setInputValue}
      label={label}
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
      defaultValue={defaultValue}
      multiLangKeyboard={multiLangKeyboard}
      rhfRegister={rhfRegister}
      ref={ref}
      setValue={setValue}
      clearErrors={clearErrors}
      rhfOptions={rhfOptions}
      labelClassName={labelClassName}
    >
      <BaseInput
        {...props}
        inputValue={inputValue}
        onChange={(e) => {
          rhfRegister?.onChange(e);
          setInputValue(e.target.value);
          onChange?.(e);
          rhfRegister?.onChange(e);
        }}
        rhfRegister={rhfRegister}
        placeholder={placeholder}
        disabled={disabled}
        iconClickCallBack={iconClickCallBack}
        setInputFocus={setInputFocus}
        name={name}
      />
    </TextInputWrapper>
  );
};
export default BaseTextInput;
