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
  formikSetValue,
  rhfSetValue,
  startIcon,
  wrapperStyle,
  clearErrors,
  rhfOptions,
  helperTextIcon,
  size,
  errorHelperText = "",
  errorHelperTextIcon,
  formAdapter,
  shouldFormikReturnNumber = false,
  ...props
}: TBaseNumberInput) => {
  const [inputFocus, setInputFocus] = useState(false);
  const normalizedDefaultValue =
    typeof defaultValue === "number" && Number.isNaN(defaultValue)
      ? undefined
      : defaultValue;
  const [inputValue, setInputValue] = useState<string>(() => {
    if (normalizedDefaultValue === undefined) return "";

    return thousandSeparate
      ? addCommas(normalizedDefaultValue)
      : String(normalizedDefaultValue);
  });
  useEffect(() => {
    const normalized =
      typeof defaultValue === "number" && Number.isNaN(defaultValue)
        ? undefined
        : defaultValue;

    if (normalized === undefined) {
      setInputValue("");
      return;
    }

    setInputValue(
      thousandSeparate
        ? addCommas(removeNonNumeric(normalized))
        : String(normalized),
    );
  }, [defaultValue, thousandSeparate]);
  return (
    <TextInputWrapper
      type={thousandSeparate ? "string" : "number"}
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
      setInputValue={setInputValue}
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
      formikSetValue={formikSetValue}
      rhfSetValue={rhfSetValue}
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
          const numericValue = rawValue === "" ? undefined : Number(rawValue);
          setInputValue(formattedValue);
          rhfRegister?.onChange({
            target: { name, value: rawValue === "" ? NaN : Number(rawValue) },
          });
          formAdapter?.onChange?.({
            target: {
              name,
              value: shouldFormikReturnNumber ? numericValue : rawValue,
            },
          });
          onChange?.({
            ...e,
            target: { ...e.target, value: rawValue, type: "number" },
          });
          formAdapter &&
            formikSetValue?.(
              formAdapter?.name,
              shouldFormikReturnNumber ? numericValue : formattedValue,
            );
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
