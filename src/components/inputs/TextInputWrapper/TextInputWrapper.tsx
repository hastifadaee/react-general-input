import clsx from "clsx";
import { forwardRef, useEffect, useState } from "react";
import "react-simple-keyboard/build/css/index.css";
import { addCommas } from "@/utils/addCommas";
import { removeNonNumeric } from "@/utils/removeNonNumeric";
import VirtualKeyboard from "@/components/VirtualKeyboard/VirtualKeyboard";
import { TTextInputWrapper } from "../types/TextInputTypes";

const TextInputWrapper = forwardRef(
  (
    {
      defaultValue = "",
      label,
      placeholder,
      required = false,
      helperText,
      error = false,
      disabled = false,
      iconClickCallBack,
      startIcon,
      endIcon,
      iconVariant,
      className,
      haveKeyboard = false,
      numericKeyboard = false,
      multiLangKeyboard = false,
      children,
      setInputValue,
      inputValue,
      inputFocus,
      thousandSeparate,
      labelClassName = "",
      inputClassName = "",
      setValue,
      rhfRegister,
      wrapperStyle,
      clearErrors,
      rhfOptions,
    }: TTextInputWrapper,
    ref: any
  ) => {
    const [isKeyboardShow, setIsKeyboardShow] = useState(false);
    const inputSetter = (input: string) => {
      const validated = rhfOptions?.validate as {
        isValid: (input: string) => boolean;
      };
      setInputValue(input);
      rhfRegister?.name && setValue?.(rhfRegister?.name, input);
      rhfOptions?.hasOwnProperty("validate")
        ? rhfOptions.validate?.hasOwnProperty("isValid")
          ? typeof validated?.isValid(input) !== "string" &&
            clearErrors?.(rhfRegister?.name)
          : typeof rhfOptions?.validate !== "string" &&
            clearErrors?.(rhfRegister?.name)
        : rhfOptions?.required &&
          input.length &&
          clearErrors?.(rhfRegister?.name);
    };
    const keyboardOnChange = (input: string) => {
      inputSetter(inputValue.concat(input));
    };
    const handleBackSpace = () => {
      if (inputValue.length) {
        const newInput = inputValue.substring(0, inputValue.length - 1);
        inputSetter(newInput);
      }
    };
    useEffect(() => {
      setInputValue?.(
        thousandSeparate
          ? addCommas(removeNonNumeric(defaultValue))
          : defaultValue
      );
    }, [defaultValue]);
    useEffect(() => {
      rhfRegister?.name && setValue?.(rhfRegister?.name, inputValue);
    }, [inputValue]);
    return (
      <div style={wrapperStyle} className={className}>
        <div
          className={"w-full flex justify-between items-start gap-2 flex-col"}
        >
          {label && (
            <div className="flex w-full justify-between">
              {label && (
                <label
                  className={clsx(
                    inputValue || inputFocus || !placeholder
                      ? "opacity-100"
                      : " translate-y-8 -translate-x-1  opacity-0 pointer-events-none",
                    "!text-neutral-2  transition-all relative text-[10px] sm:text-xs md:text-sm",
                    labelClassName
                  )}
                >
                  {label}
                  {required && <span className="text-danger-0">*</span>}
                </label>
              )}
            </div>
          )}
          <div
            className={clsx(
              error
                ? "shadow-[0px_0px_8px_0px_rgba(221,19,0,0.26)]"
                : "shadow-[0px_0px_8px_0px_rgba(50,49,118,0.16)]",
              "transition-transform  w-full px-4 py-2 h-[34px] sm:h-12 rounded flex items-center justify-between bg-white relative",
              !disabled &&
                !error &&
                "hover:shadow-[0px_0px_8px_0px_rgba(50,49,118,0.16),0px_4px_4px_0px_rgba(50,49,118,0.16)] transition-shadow ",
              disabled && "!bg-neutral-10",
              inputClassName
            )}
          >
            {startIcon && (
              <span
                onClick={() => iconClickCallBack?.(inputValue)}
                className={clsx(
                  "inline-flex justify-center items-center text-base sm:text-2xl ml-2 cursor-pointer",
                  startIcon,
                  iconVariant == "outlined"
                    ? "text-primary-6"
                    : "w-[18px] h-[18px] md:w-8 md:h-8 text-white rounded-[100%]"
                )}
              >
                {typeof startIcon === "string" ? null : startIcon}
              </span>
            )}
            {children}
            {endIcon && (
              <span
                onClick={() => iconClickCallBack?.(inputValue)}
                className={clsx(
                  "inline-flex justify-center items-center text-base sm:text-2xl cursor-pointer ",
                  endIcon,
                  iconVariant == "outlined"
                    ? "text-primary-6"
                    : "w-[18px] h-[18px] sm:w-8 md:h-8 text-white rounded-[100%]"
                )}
              >
                {typeof endIcon === "string" ? null : endIcon}
              </span>
            )}
            {haveKeyboard && (
              <VirtualKeyboard
                handleBackSpace={handleBackSpace}
                multiLang={multiLangKeyboard}
                isNumeric={numericKeyboard}
                keyboardOnChange={keyboardOnChange}
                isKeyboardShow={isKeyboardShow}
                setIsKeyboardShow={setIsKeyboardShow}
              />
            )}
          </div>
        </div>
        {helperText && (
          <p
            className={clsx(
              "text-xs flex items-center mt-2",
              error ? "text-danger-0" : "text-neutral-5"
            )}
          >
            <span className={clsx("icon-Danger-Circle1 text-sm ml-2")}></span>
            {helperText.toString()}
          </p>
        )}
      </div>
    );
  }
);

export default TextInputWrapper;
