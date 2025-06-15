import { __assign, __read, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import clsx from "clsx";
import BaseInput from "../BaseInput/BaseInput";
import { passwordStrength } from "check-password-strength";
import TextInputWrapper from "../TextInputWrapper/TextInputWrapper";
var BasePasswordInput = function (_a) {
    var _b;
    var rhfRegister = _a.rhfRegister, _c = _a.haveKeyboard, haveKeyboard = _c === void 0 ? false : _c, defaultValue = _a.defaultValue, placeholder = _a.placeholder, onChange = _a.onChange, disabled = _a.disabled, iconClickCallBack = _a.iconClickCallBack, endIcon = _a.endIcon, className = _a.className, label = _a.label, passwordStrengthCheck = _a.passwordStrengthCheck, _d = _a.helperText, helperText = _d === void 0 ? "" : _d, _e = _a.error, error = _e === void 0 ? false : _e, _f = _a.required, required = _f === void 0 ? false : _f, inputClassName = _a.inputClassName, labelClassName = _a.labelClassName, name = _a.name, setValue = _a.setValue, multiLangKeyboard = _a.multiLangKeyboard, ref = _a.ref, startIcon = _a.startIcon, wrapperStyle = _a.wrapperStyle, props = __rest(_a, ["rhfRegister", "haveKeyboard", "defaultValue", "placeholder", "onChange", "disabled", "iconClickCallBack", "endIcon", "className", "label", "passwordStrengthCheck", "helperText", "error", "required", "inputClassName", "labelClassName", "name", "setValue", "multiLangKeyboard", "ref", "startIcon", "wrapperStyle"]);
    var _g = __read(useState(false), 2), inputFocus = _g[0], setInputFocus = _g[1];
    var _h = __read(useState(false), 2), showPassword = _h[0], setShowPassword = _h[1];
    var _j = __read(useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : ""), 2), inputValue = _j[0], setInputValue = _j[1];
    var passwordStrengthData = [
        { text: "خیلی ضعیف", color: "text-secondary-2" },
        { text: "ضعیف", color: "text-secondary-5" },
        { text: "متوسط", color: "text-lowLevel-0" },
        { text: "قوی", color: "text-success-0" },
    ];
    var passwordCharChecker = function (e) {
        var value = e.target.value;
        return value.replace(/[^A-Za-z0-9!@#$%^&*()\-_=+{};:,<.>]/g, "");
    };
    return (_jsxs(TextInputWrapper, { wrapperStyle: wrapperStyle, inputClassName: inputClassName, labelClassName: labelClassName, required: required, error: error, haveKeyboard: false, inputValue: inputValue, setInputValue: setInputValue, className: className, label: label, helperText: helperText, disabled: disabled, inputFocus: inputFocus, placeholder: placeholder, defaultValue: defaultValue, endIcon: endIcon, iconClickCallBack: iconClickCallBack, multiLangKeyboard: multiLangKeyboard, rhfRegister: rhfRegister, ref: ref, setValue: setValue, startIcon: startIcon, children: [inputValue && passwordStrengthCheck && (_jsx("p", { className: clsx(passwordStrengthData[passwordStrength(inputValue).id].color, "text-danger-0 text-[10px] sm:text-xs md:text-sm flex items-center mt-2 absolute top-[-30px] md:top-[-35px] left-0"), children: (_b = passwordStrengthData[passwordStrength(inputValue).id]) === null || _b === void 0 ? void 0 : _b.text })), _jsx(BaseInput, __assign({}, props, { type: showPassword ? "text" : "password", onChange: function (e) {
                    rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.onChange(e);
                    setInputValue(passwordCharChecker(e));
                    onChange === null || onChange === void 0 ? void 0 : onChange(__assign(__assign({}, e), { target: __assign(__assign({}, e.target), { value: passwordCharChecker(e) }) }));
                    rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.onChange(e);
                }, inputValue: inputValue, rhfRegister: rhfRegister, iconClickCallBack: iconClickCallBack, setInputFocus: setInputFocus, required: required, name: name, placeholder: placeholder })), _jsx("span", { onClick: function () { return setShowPassword(!showPassword); }, className: clsx(showPassword ? "icon-Eye !text-xl" : "icon-Hide-Password ", "inline-flex justify-end items-center text-base cursor-pointer text-primary-6 w-[18px] h-[18px] sm:w-8 sm:h-8 rounded-[100%] ", endIcon && "justify-center") })] }));
};
export default BasePasswordInput;
//# sourceMappingURL=BasePasswordTextInput.js.map