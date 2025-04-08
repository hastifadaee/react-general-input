import BaseInput from "../BaseInput/BaseInput";
import { TBaseNumberInput } from "../types/TextInputTypes";
import { useEffect, useState } from "react";
import TextInputWrapper from "../TextInputWrapper/TextInputWrapper";
import * as React from "react";
import { addCommas } from "../../../utils/addCommas";
import { thousandSeparator } from "../../../utils/thousandSeparator";

const BaseNumberInput = ({
  rhfRegister,
  handleChange,
  haveKeyboard,
  numericKeyboard,
  defaultValue,
  maxLength,
  placeholder,
  handleBlur,
  disabled,
  ltr,
  name,
  iconClickCallBack,
  className,
  label,
  helperText = "",
  error = false,
  required = false,
  iconVariant,
  thousandSeparate = true,
}: TBaseNumberInput) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState(
    thousandSeparate ? addCommas(defaultValue || "") : defaultValue ?? ""
  );
  useEffect(() => {
    thousandSeparate
      ? setInputValue(addCommas(removeNonNumeric(defaultValue || "")))
      : setInputValue(defaultValue || "");
  }, [defaultValue]);
  return (
    <TextInputWrapper
      iconVariant={iconVariant}
      required={required}
      error={error}
      label={label}
      numericKeyboard={numericKeyboard}
      haveKeyboard={haveKeyboard}
      inputValue={inputValue}
      setInputValue={setInputValue}
      type={thousandSeparate ? "text" : "number"}
      className={className}
      helperText={helperText}
      disabled={disabled}
      inputFocus={inputFocus}
      placeholder={placeholder}
    >
      <BaseInput
        type={thousandSeparate ? "text" : "number"}
        inputValue={inputValue}
        onChange={(e) => {
          const rawValue = removeNonNumeric(e.target.value);
          const formattedValue = thousandSeparate
            ? thousandSeparator(e)
            : rawValue; 
          setInputValue(formattedValue); 
          rhfRegister?.onChange({ target: { name, value: rawValue } }); 
          handleChange?.(rawValue);
        }}
        thousandSeparate={thousandSeparate}
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
export default BaseNumberInput;
function removeNonNumeric(arg0: string): string {
  throw new Error("Function not implemented.");
}

