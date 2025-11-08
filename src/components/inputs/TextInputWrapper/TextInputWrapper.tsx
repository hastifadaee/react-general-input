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
      size,
      passwordStrengthCheckStyle,
      passwordStrengthCheck,
      baseInputBoxClassName,
      isPassword = false,
      labelClassName,
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
                    size
                      ? size === "medium"
                        ? "rgi-mediumLabel"
                        : size === "small"
                        ? "rgi-smallLabel"
                        : "rgi-largeLabel"
                      : "rgi-labelSizes",
                    "text-neutral-2 transition-all relative text-[10px] sm:text-xs md:text-sm ",
                    "rgi-label",
                    labelClassName
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
              baseInputBoxClassName,
              !disabled && "rgi-baseInputBox",
              passwordStrengthCheck
                ? passwordStrengthCheckStyle
                : error
                ? "shadow-[0px_0px_8px_0px_rgba(221,19,0,0.26)] rgi-errorInput"
                : "shadow-[0px_0px_8px_0px_rgba(50,49,118,0.16)] rgi-validInput",
              // passwordStrengthCheck && passwordStrengthCheckStyle,
              "transition-transform w-full h-[34px] sm:h-12 rounded flex items-center justify-between bg-white relative",
              !disabled &&
                !error &&
                "hover:shadow-[0px_0px_8px_0px_rgba(50,49,118,0.16),0px_4px_4px_0px_rgba(50,49,118,0.16)] transition-shadow rgi-hoverInput",
              disabled && "bg-neutral-10 rgi-disabledInput",
              size
                ? size === "small"
                  ? "rgi-baseSmallInputBox"
                  : size === "medium"
                  ? "rgi-baseMediumInputBox"
                  : "rgi-baseLargeInputBox"
                : "rgi-baseInputBoxSizes",
              startIcon
                ? size
                  ? size === "small"
                    ? "!pr-1"
                    : size === "medium"
                    ? "!pr-[6px]"
                    : "!pr-[8px]"
                  : "!pr-[4px] lg:!pr-[6px]"
                : "",
              endIcon
                ? size
                  ? size === "small"
                    ? "!pl-1"
                    : size === "medium"
                    ? "!pl-[6px]"
                    : "!pl-[8px]"
                  : "!pl-[4px] lg:!pl-[6px] "
                : "",
              isPassword
                ? size
                  ? size === "small"
                    ? "!pl-1"
                    : size === "medium"
                    ? "!pl-[6px]"
                    : "!pl-[8px]"
                  : "!pl-[4px] lg:!pl-[6px]"
                : ""
            )}
          >
            {startIcon && (
              <span
                onClick={() => iconClickCallBack?.(inputValue)}
                className={clsx(
                  "inline-flex justify-center items-center ml-2 cursor-pointer",
                  startIcon,
                  typeof startIcon === "string"
                    ? " text-base sm:text-2xl"
                    : "h-full",
                  iconVariant == "outlined"
                    ? "text-primary-6"
                    : typeof endIcon === "string"
                    ? "w-[18px] h-[18px] md:w-8 md:h-8 text-white rounded-[100%]"
                    : ""
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
                  "inline-flex justify-center items-center cursor-pointer ",
                  endIcon,
                  typeof endIcon === "string"
                    ? "text-base sm:text-2xl "
                    : "h-full",
                  iconVariant == "outlined"
                    ? "text-primary-6"
                    : typeof endIcon === "string"
                    ? "w-[18px] h-[18px] sm:w-8 md:h-8 text-white rounded-[100%]"
                    : null
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
                errorHelperTextIcon ? "" : "icon-alert-triangle"
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
