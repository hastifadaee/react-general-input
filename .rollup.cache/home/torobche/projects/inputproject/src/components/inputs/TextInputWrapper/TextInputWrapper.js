import { __read } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { forwardRef, useEffect, useState } from "react";
import "react-simple-keyboard/build/css/index.css";
import { addCommas } from "@/utils/addCommas";
import { removeNonNumeric } from "@/utils/removeNonNumeric";
import VirtualKeyboard from "@/components/VirtualKeyboard/VirtualKeyboard";
var TextInputWrapper = forwardRef(function (_a, ref) {
    var _b = _a.defaultValue, defaultValue = _b === void 0 ? "" : _b, label = _a.label, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, helperText = _a.helperText, _d = _a.error, error = _d === void 0 ? false : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, iconClickCallBack = _a.iconClickCallBack, startIcon = _a.startIcon, endIcon = _a.endIcon, iconVariant = _a.iconVariant, className = _a.className, _f = _a.haveKeyboard, haveKeyboard = _f === void 0 ? false : _f, _g = _a.numericKeyboard, numericKeyboard = _g === void 0 ? false : _g, _h = _a.multiLangKeyboard, multiLangKeyboard = _h === void 0 ? false : _h, children = _a.children, setInputValue = _a.setInputValue, inputValue = _a.inputValue, inputFocus = _a.inputFocus, thousandSeparate = _a.thousandSeparate, setValue = _a.setValue, rhfRegister = _a.rhfRegister, wrapperStyle = _a.wrapperStyle, clearErrors = _a.clearErrors, rhfOptions = _a.rhfOptions, helperTextIcon = _a.helperTextIcon, errorHelperText = _a.errorHelperText, errorHelperTextIcon = _a.errorHelperTextIcon, size = _a.size, passwordStrengthCheckStyle = _a.passwordStrengthCheckStyle, passwordStrengthCheck = _a.passwordStrengthCheck, _j = _a.isPassword, isPassword = _j === void 0 ? false : _j;
    var _k = __read(useState(false), 2), isKeyboardShow = _k[0], setIsKeyboardShow = _k[1];
    var inputSetter = function (input) {
        var _a;
        var validated = rhfOptions === null || rhfOptions === void 0 ? void 0 : rhfOptions.validate;
        setInputValue(input);
        (rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.name) && (setValue === null || setValue === void 0 ? void 0 : setValue(rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.name, input));
        (rhfOptions === null || rhfOptions === void 0 ? void 0 : rhfOptions.hasOwnProperty("validate"))
            ? ((_a = rhfOptions.validate) === null || _a === void 0 ? void 0 : _a.hasOwnProperty("isValid"))
                ? typeof (validated === null || validated === void 0 ? void 0 : validated.isValid(input)) !== "string" &&
                    (clearErrors === null || clearErrors === void 0 ? void 0 : clearErrors(rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.name))
                : typeof (rhfOptions === null || rhfOptions === void 0 ? void 0 : rhfOptions.validate) !== "string" &&
                    (clearErrors === null || clearErrors === void 0 ? void 0 : clearErrors(rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.name))
            : (rhfOptions === null || rhfOptions === void 0 ? void 0 : rhfOptions.required) &&
                input.length &&
                (clearErrors === null || clearErrors === void 0 ? void 0 : clearErrors(rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.name));
    };
    var keyboardOnChange = function (input) {
        inputSetter(inputValue.concat(input));
    };
    var handleBackSpace = function () {
        if (inputValue.length) {
            var newInput = inputValue.substring(0, inputValue.length - 1);
            inputSetter(newInput);
        }
    };
    useEffect(function () {
        setInputValue === null || setInputValue === void 0 ? void 0 : setInputValue(thousandSeparate
            ? addCommas(removeNonNumeric(defaultValue))
            : defaultValue);
    }, [defaultValue]);
    useEffect(function () {
        if (!thousandSeparate) {
            (rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.name) && (setValue === null || setValue === void 0 ? void 0 : setValue(rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.name, inputValue));
        }
    }, [inputValue]);
    return (_jsxs("div", { style: wrapperStyle, className: clsx("rgi-wrapper", className), children: [_jsxs("div", { className: "w-full flex justify-between items-start gap-2 flex-col", children: [label && (_jsx("div", { className: "flex w-full justify-between", children: label && (_jsxs("label", { className: clsx(inputValue || inputFocus || !placeholder
                                ? "opacity-100"
                                : " translate-y-8 -translate-x-1 opacity-0 pointer-events-none", size
                                ? size === "medium"
                                    ? "rgi-mediumLabel"
                                    : size === "small"
                                        ? "rgi-smallLabel"
                                        : "rgi-largeLabel"
                                : "rgi-labelSizes", "text-neutral-2 transition-all relative text-[10px] sm:text-xs md:text-sm ", "rgi-label"), children: [label, required && (_jsx("span", { className: "text-danger-0 rgi-requiredSpan", children: "*" }))] })) })), _jsxs("div", { className: clsx(!disabled && "rgi-baseInputBox", passwordStrengthCheck
                            ? passwordStrengthCheckStyle
                            : error
                                ? "shadow-[0px_0px_8px_0px_rgba(221,19,0,0.26)] rgi-errorInput"
                                : "shadow-[0px_0px_8px_0px_rgba(50,49,118,0.16)] rgi-validInput", 
                        // passwordStrengthCheck && passwordStrengthCheckStyle,
                        "transition-transform w-full h-[34px] sm:h-12 rounded flex items-center justify-between bg-white relative", !disabled &&
                            !error &&
                            "hover:shadow-[0px_0px_8px_0px_rgba(50,49,118,0.16),0px_4px_4px_0px_rgba(50,49,118,0.16)] transition-shadow rgi-hoverInput", disabled && "bg-neutral-10 rgi-disabledInput", size
                            ? size === "small"
                                ? "rgi-baseSmallInputBox"
                                : size === "medium"
                                    ? "rgi-baseMediumInputBox"
                                    : "rgi-baseLargeInputBox"
                            : "rgi-baseInputBoxSizes", startIcon
                            ? size
                                ? size === "small"
                                    ? "!pr-1"
                                    : size === "medium"
                                        ? "!pr-[6px]"
                                        : "!pr-[8px]"
                                : "!pr-[4px] lg:!pr-[6px]"
                            : "", endIcon
                            ? size
                                ? size === "small"
                                    ? "!pl-1"
                                    : size === "medium"
                                        ? "!pl-[6px]"
                                        : "!pl-[8px]"
                                : "!pl-[4px] lg:!pl-[6px] "
                            : "", isPassword
                            ? size
                                ? size === "small"
                                    ? "!pl-1"
                                    : size === "medium"
                                        ? "!pl-[6px]"
                                        : "!pl-[8px]"
                                : "!pl-[4px] lg:!pl-[6px]"
                            : ""), children: [startIcon && (_jsx("span", { onClick: function () { return iconClickCallBack === null || iconClickCallBack === void 0 ? void 0 : iconClickCallBack(inputValue); }, className: clsx("inline-flex justify-center items-center ml-2 cursor-pointer", startIcon, typeof startIcon === "string"
                                    ? " text-base sm:text-2xl"
                                    : "h-full", iconVariant == "outlined"
                                    ? "text-primary-6"
                                    : typeof endIcon === "string"
                                        ? "w-[18px] h-[18px] md:w-8 md:h-8 text-white rounded-[100%]"
                                        : ""), children: typeof startIcon === "string" ? null : startIcon })), children, endIcon && (_jsx("span", { onClick: function () { return iconClickCallBack === null || iconClickCallBack === void 0 ? void 0 : iconClickCallBack(inputValue); }, className: clsx("inline-flex justify-center items-center cursor-pointer ", endIcon, typeof endIcon === "string"
                                    ? "text-base sm:text-2xl "
                                    : "h-full", iconVariant == "outlined"
                                    ? "text-primary-6"
                                    : typeof endIcon === "string"
                                        ? "w-[18px] h-[18px] sm:w-8 md:h-8 text-white rounded-[100%]"
                                        : null), children: typeof endIcon === "string" ? null : endIcon })), haveKeyboard && (_jsx(VirtualKeyboard, { handleBackSpace: handleBackSpace, multiLang: multiLangKeyboard, isNumeric: numericKeyboard, keyboardOnChange: keyboardOnChange, isKeyboardShow: isKeyboardShow, setIsKeyboardShow: setIsKeyboardShow }))] })] }), errorHelperText && (_jsxs("p", { className: clsx("text-danger-0 rgi-errorHelperText text-xs flex items-center mt-2", "flex items-center", (helperText === null || helperText === void 0 ? void 0 : helperText.length) && "mb-1"), children: [_jsx("span", { className: clsx(errorHelperTextIcon ? "" : "icon-alert-triangle", "text-base ml-1 rgi-errorHelperTextIcon"), children: errorHelperTextIcon }), _jsx("span", { children: errorHelperText.toString() })] })), (helperText === null || helperText === void 0 ? void 0 : helperText.length) ? (_jsx("div", { className: clsx("flex items-start justify-center flex-col gap-1 rgi-validHelperTextGroup", errorHelperText ? "mt-0" : "mt-1"), children: helperText.map(function (item, index) {
                    return (_jsxs("p", { className: clsx("text-neutral-5 text-xs flex items-center rgi-validHelperText", "flex items-center"), children: [_jsx("span", { className: clsx("text-base ml-1 rgi-helperTextIcon", helperTextIcon ? "" : "icon-info-circle"), children: helperTextIcon }), _jsx("span", { children: item })] }, index));
                }) })) : null] }));
});
export default TextInputWrapper;
//# sourceMappingURL=TextInputWrapper.js.map