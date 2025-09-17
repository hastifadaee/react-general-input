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
      setValue,
      rhfRegister,
      wrapperStyle,
      clearErrors,
      rhfOptions,
      helperTextIcon,
      errorHelperText,
      errorHelperTextIcon,
      size = "medium",
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
      if (!thousandSeparate) {
        rhfRegister?.name && setValue?.(rhfRegister?.name, inputValue);
      }
    }, [inputValue]);
    return (
      <div style={wrapperStyle} className={clsx("rgi-wrapper", className)}>
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
                      : " translate-y-8 -translate-x-1 opacity-0 pointer-events-none",
                    size === "medium"
                      ? "rgi-mediumLabel"
                      : size === "small"
                      ? "rgi-smallLabel"
                      : "rgi-largeLabel",
                    "rgi-label !text-neutral-2 transition-all relative text-[10px] sm:text-xs md:text-sm"
                  )}
                >
                  {label}
                  {required && (
                    <span className="text-danger-0 rgi-requiredSpan">*</span>
                  )}
                </label>
              )}
            </div>
          )}
          <div
            className={clsx(
              error
                ? "shadow-[0px_0px_8px_0px_rgba(221,19,0,0.26)] rgi-errorInput"
                : "shadow-[0px_0px_8px_0px_rgba(50,49,118,0.16)] rgi-validInput",
              "transition-transform w-full px-4 py-2 h-[34px] sm:h-12 rounded flex items-center justify-between bg-white relative",
              !disabled &&
                !error &&
                "hover:shadow-[0px_0px_8px_0px_rgba(50,49,118,0.16),0px_4px_4px_0px_rgba(50,49,118,0.16)] transition-shadow rgi-hoverInput",
              disabled && "!bg-neutral-10 rgi-disabledInput",
              "rgi-baseInputBox",
              size === "small"
                ? "rgi-baseSmallInputBox"
                : size === "medium"
                ? "rgi-baseMediumInputBox"
                : "rgi-baseLargeInputBox"
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
        {errorHelperText && (
          <p
            className={clsx(
              "text-danger-0 rgi-errorHelperText text-xs flex items-center mt-2",
              "flex items-center",
              helperText?.length && "mb-1"
            )}
          >
            <span
              className={clsx(
                "text-base ml-1 rgi-errorHelperTextIcon",
                errorHelperTextIcon ? "" : "icon-Danger-Triangle"
              )}
            >
              {errorHelperTextIcon}
            </span>
            <span>{errorHelperText.toString()}</span>
          </p>
        )}
        {helperText?.length ? (
          <div
            className={clsx(
              "flex items-start justify-center flex-col gap-1 rgi-validHelperTextGroup",
              errorHelperText ? "mt-0" : "mt-1"
            )}
          >
            {helperText.map((item, index) => {
              return (
                <p
                  key={index}
                  className={clsx(
                    "text-neutral-5 text-xs flex items-center rgi-validHelperText",
                    "flex items-center"
                  )}
                >
                  <span
                    className={clsx(
                      "text-base ml-1 rgi-helperTextIcon",
                      helperTextIcon ? "" : "icon-info-circle"
                    )}
                  >
                    {helperTextIcon}
                  </span>
                  <span>{item.toString()}</span>
                </p>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
);

export default TextInputWrapper;
