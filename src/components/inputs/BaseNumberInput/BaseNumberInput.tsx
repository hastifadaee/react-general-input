"use client";
import BaseInput from "../BaseInput/BaseInput";
import { TBaseNumberInput } from "../types/TextInputTypes";
import { useEffect, useLayoutEffect, useState } from "react";
import TextInputWrapper from "../TextInputWrapper/TextInputWrapper";
import { addCommas } from "@/utils/addCommas";
import { removeNonNumeric } from "@/utils/removeNonNumeric";
import { thousandSeparator } from "@/utils/thousandSeparator";

const BaseNumberInput = ({
  rhfRegister,
  onChange,
  haveKeyboard,
  numericKeyboard,
  defaultValue,
  placeholder,
  disabled,
  dir,
  name,
  iconClickCallBack,
  className,
  label,
  helperText = [],
  error = false,
  required = false,
  iconVariant,
  thousandSeparate = false,
  endIcon,
  multiLangKeyboard,
  ref,
  rhfSetValue,
  formikSetValue,
  startIcon,
  wrapperStyle,
  clearErrors,
  rhfOptions,
  helperTextIcon,
  size,
  errorHelperText = "",
  errorHelperTextIcon,
  formAdapter,
  ...props
}: TBaseNumberInput) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState(
    thousandSeparate
      ? addCommas(defaultValue || "")
      : (defaultValue?.toString() ?? ""),
  );
  useEffect(() => {
    thousandSeparate
      ? setInputValue(addCommas(removeNonNumeric(defaultValue || "")))
      : setInputValue(defaultValue?.toString() || "");
  }, [defaultValue]);

  return (
    <TextInputWrapper
      type={thousandSeparate ? "string" : "number"}
      setInputValue={setInputValue}
      errorHelperText={errorHelperText}
      errorHelperTextIcon={errorHelperTextIcon}
      size={size}
      helperTextIcon={helperTextIcon}
      wrapperStyle={wrapperStyle}
      iconVariant={iconVariant}
      required={required}
      error={error}
      label={label}
      numericKeyboard={numericKeyboard}
      haveKeyboard={haveKeyboard}
      inputValue={inputValue}
      formikSetValue={formikSetValue}
      rhfSetValue={rhfSetValue}
      className={className}
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
      startIcon={startIcon}
      thousandSeparate={thousandSeparate}
      clearErrors={clearErrors}
      rhfOptions={rhfOptions}
      formAdapter={formAdapter}
    >
      <BaseInput
        {...props}
        required={required}
        type={thousandSeparate ? "text" : "number"}
        inputValue={inputValue}
        onChange={(e) => {
          const rawValue = removeNonNumeric(e.target.value);
          const formattedValue = thousandSeparate
            ? thousandSeparator(e.target.value)
            : rawValue;
          rhfRegister?.onChange({ target: { name, value: rawValue } });
          formAdapter?.onChange?.({ target: { name, value: rawValue } });
          onChange?.({ ...e, target: { ...e.target, value: rawValue } });
          formAdapter && formikSetValue?.(formAdapter?.name, formattedValue);
          setInputValue(formattedValue);
        }}
        formAdapter={formAdapter}
        thousandSeparate={thousandSeparate}
        rhfRegister={rhfRegister}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        iconClickCallBack={iconClickCallBack}
        setInputFocus={setInputFocus}
      />
    </TextInputWrapper>
  );
};
export default BaseNumberInput;
