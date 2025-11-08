import { __assign, __read, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import clsx from "clsx";
import BaseInput from "../BaseInput/BaseInput";
import { passwordStrength } from "check-password-strength";
import TextInputWrapper from "../TextInputWrapper/TextInputWrapper";
var BasePasswordInput = function (_a) {
    var _b;
    var rhfRegister = _a.rhfRegister, _c = _a.haveKeyboard, haveKeyboard = _c === void 0 ? false : _c, defaultValue = _a.defaultValue, placeholder = _a.placeholder, onChange = _a.onChange, disabled = _a.disabled, iconClickCallBack = _a.iconClickCallBack, endIcon = _a.endIcon, className = _a.className, label = _a.label, passwordStrengthCheck = _a.passwordStrengthCheck, _d = _a.helperText, helperText = _d === void 0 ? [] : _d, _e = _a.error, error = _e === void 0 ? false : _e, _f = _a.required, required = _f === void 0 ? false : _f, name = _a.name, setValue = _a.setValue, multiLangKeyboard = _a.multiLangKeyboard, ref = _a.ref, startIcon = _a.startIcon, wrapperStyle = _a.wrapperStyle, rhfOptions = _a.rhfOptions, clearErrors = _a.clearErrors, helperTextIcon = _a.helperTextIcon, _g = _a.errorHelperText, errorHelperText = _g === void 0 ? "" : _g, errorHelperTextIcon = _a.errorHelperTextIcon, passwordIcon = _a.passwordIcon, baseInputBoxClassName = _a.baseInputBoxClassName, _h = _a.passwordStrengthData, passwordStrengthData = _h === void 0 ? [
        {
            text: "خیلی ضعیف",
            textColor: "!text-secondary-2",
            borderColor: "!border-secondary-2",
        },
        {
            text: "ضعیف",
            textColor: "!text-secondary-5",
            borderColor: "!border-secondary-5",
        },
        {
            text: "متوسط",
            textColor: "!text-lowLevel-0",
            borderColor: "!border-lowLevel-0",
        },
        {
            text: "قوی",
            textColor: "!text-success-0",
            borderColor: "!border-success-0",
        },
    ] : _h, size = _a.size, labelClassName = _a.labelClassName, props = __rest(_a, ["rhfRegister", "haveKeyboard", "defaultValue", "placeholder", "onChange", "disabled", "iconClickCallBack", "endIcon", "className", "label", "passwordStrengthCheck", "helperText", "error", "required", "name", "setValue", "multiLangKeyboard", "ref", "startIcon", "wrapperStyle", "rhfOptions", "clearErrors", "helperTextIcon", "errorHelperText", "errorHelperTextIcon", "passwordIcon", "baseInputBoxClassName", "passwordStrengthData", "size", "labelClassName"]);
    var _j = __read(useState(false), 2), inputFocus = _j[0], setInputFocus = _j[1];
    var _k = __read(useState(false), 2), showPassword = _k[0], setShowPassword = _k[1];
    var _l = __read(useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : ""), 2), inputValue = _l[0], setInputValue = _l[1];
    var passwordCharChecker = function (e) {
        var value = e.target.value;
        return value.replace(/[^A-Za-z0-9!@#$%^&*()\-_=+{};:,<.>]/g, "");
    };
    return (_jsxs(TextInputWrapper, { isPassword: true, baseInputBoxClassName: baseInputBoxClassName, passwordStrengthCheckStyle: clsx(inputValue &&
            passwordStrengthCheck &&
            passwordStrengthData[passwordStrength(inputValue).id].borderColor), passwordStrengthCheck: (inputValue && passwordStrengthCheck), errorHelperText: errorHelperText, errorHelperTextIcon: errorHelperTextIcon, size: size, helperTextIcon: helperTextIcon, wrapperStyle: wrapperStyle, required: required, error: error, haveKeyboard: false, inputValue: inputValue, setInputValue: setInputValue, className: className, label: label, helperText: helperText, disabled: disabled, inputFocus: inputFocus, placeholder: placeholder, defaultValue: defaultValue, endIcon: endIcon, iconClickCallBack: iconClickCallBack, multiLangKeyboard: multiLangKeyboard, rhfRegister: rhfRegister, ref: ref, setValue: setValue, startIcon: startIcon, clearErrors: clearErrors, rhfOptions: rhfOptions, labelClassName: labelClassName, children: [inputValue && passwordStrengthCheck && (_jsx("p", { className: clsx("text-[10px] sm:text-xs md:text-sm flex items-center mt-2 absolute top-[-30px] md:top-[-35px] left-0 rgi-passwordStrengthCheck", passwordStrengthData[passwordStrength(inputValue).id].textColor), children: (_b = passwordStrengthData[passwordStrength(inputValue).id]) === null || _b === void 0 ? void 0 : _b.text })), _jsx(BaseInput, __assign({}, props, { type: showPassword ? "text" : "password", onChange: function (e) {
                    rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.onChange(e);
                    setInputValue(passwordCharChecker(e));
                    onChange === null || onChange === void 0 ? void 0 : onChange(__assign(__assign({}, e), { target: __assign(__assign({}, e.target), { value: passwordCharChecker(e) }) }));
                    rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.onChange(e);
                }, inputValue: inputValue, rhfRegister: rhfRegister, iconClickCallBack: iconClickCallBack, setInputFocus: setInputFocus, required: required, name: name, placeholder: placeholder })), _jsx("span", { onClick: function () { return setShowPassword(!showPassword); }, className: clsx(showPassword ? "icon-eye text-xl" : "icon-eye-off", "rgi-passwordIcon inline-flex justify-end items-center text-base cursor-pointer text-primary-6 w-[18px] h-[18px] sm:w-8 sm:h-8 rounded-[100%] ", endIcon && "justify-center"), children: passwordIcon })] }));
};
export default BasePasswordInput;
//# sourceMappingURL=BasePasswordInput.js.map