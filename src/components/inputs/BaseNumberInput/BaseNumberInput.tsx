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
  helperText = "",
  error = false,
  required = false,
  iconVariant,
  thousandSeparate = true,
  labelClassName,
  inputClassName,
  ...props
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
      inputClassName={inputClassName}
      labelClassName={labelClassName}
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
    >
      <BaseInput
        {...props}
        type={thousandSeparate ? "text" : "number"}
        inputValue={inputValue}
        onChange={(e) => {
          const rawValue = removeNonNumeric(e.target.value);
          const formattedValue = thousandSeparate
            ? thousandSeparator(e)
            : rawValue;
          setInputValue(formattedValue);
          rhfRegister?.onChange({ target: { name, value: rawValue } });
          onChange?.({ ...e, target: { ...e.target, value: rawValue } });
        }}
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
