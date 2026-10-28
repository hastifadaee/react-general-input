"use client";
import BaseInput from "../BaseInput/BaseInput";
import { TBaseNumberInput } from "../types/TextInputTypes";
import { useEffect, useState } from "react";
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
  const normalizedDefaultValue = defaultValue?.toString() ?? "";
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState(
    thousandSeparate
      ? addCommas(normalizedDefaultValue)
      : normalizedDefaultValue,
  );
  useEffect(() => {
    thousandSeparate
      ? setInputValue(addCommas(removeNonNumeric(normalizedDefaultValue)))
      : setInputValue(normalizedDefaultValue);
  }, [normalizedDefaultValue, thousandSeparate]);

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
      defaultValue={normalizedDefaultValue}
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
          const numericValue = rawValue === "" ? undefined : Number(rawValue);
          const formattedValue = thousandSeparate
            ? thousandSeparator(e.target.value)
            : rawValue;
          const fieldName = rhfRegister?.name ?? formAdapter?.name ?? name;
          const numericEvent = {
            ...e,
            target: { ...e.target, name: fieldName, value: numericValue },
          };

          rhfRegister?.onChange(numericEvent);
          formAdapter?.onChange?.(numericEvent);
          onChange?.(numericEvent);
          formAdapter && formikSetValue?.(formAdapter.name, numericValue);
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
