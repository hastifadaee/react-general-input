import { __assign, __read, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import clsx from "clsx";
import BaseInput from "../BaseInput/BaseInput";
import { passwordStrength } from "check-password-strength";
import TextInputWrapper from "../TextInputWrapper/TextInputWrapper";
var BasePasswordInput = function (_a) {
    var _b;
    var rhfRegister = _a.rhfRegister, _c = _a.haveKeyboard, haveKeyboard = _c === void 0 ? false : _c, defaultValue = _a.defaultValue, placeholder = _a.placeholder, onChange = _a.onChange, disabled = _a.disabled, iconClickCallBack = _a.iconClickCallBack, endIcon = _a.endIcon, className = _a.className, label = _a.label, passwordStrengthCheck = _a.passwordStrengthCheck, _d = _a.helperText, helperText = _d === void 0 ? "" : _d, _e = _a.error, error = _e === void 0 ? false : _e, _f = _a.required, required = _f === void 0 ? false : _f, name = _a.name, setValue = _a.setValue, multiLangKeyboard = _a.multiLangKeyboard, ref = _a.ref, startIcon = _a.startIcon, wrapperStyle = _a.wrapperStyle, rhfOptions = _a.rhfOptions, clearErrors = _a.clearErrors, helperTextIcon = _a.helperTextIcon, _g = _a.passwordStrengthData, passwordStrengthData = _g === void 0 ? [
        { text: "خیلی ضعیف", color: "text-secondary-2" },
        { text: "ضعیف", color: "text-secondary-5" },
        { text: "متوسط", color: "text-lowLevel-0" },
        { text: "قوی", color: "text-success-0" },
    ] : _g, size = _a.size, props = __rest(_a, ["rhfRegister", "haveKeyboard", "defaultValue", "placeholder", "onChange", "disabled", "iconClickCallBack", "endIcon", "className", "label", "passwordStrengthCheck", "helperText", "error", "required", "name", "setValue", "multiLangKeyboard", "ref", "startIcon", "wrapperStyle", "rhfOptions", "clearErrors", "helperTextIcon", "passwordStrengthData", "size"]);
    var _h = __read(useState(false), 2), inputFocus = _h[0], setInputFocus = _h[1];
    var _j = __read(useState(false), 2), showPassword = _j[0], setShowPassword = _j[1];
    var _k = __read(useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : ""), 2), inputValue = _k[0], setInputValue = _k[1];
    var passwordCharChecker = function (e) {
        var value = e.target.value;
        return value.replace(/[^A-Za-z0-9!@#$%^&*()\-_=+{};:,<.>]/g, "");
    };
    return (_jsxs(TextInputWrapper, { size: size, helperTextIcon: helperTextIcon, wrapperStyle: wrapperStyle, required: required, error: error, haveKeyboard: false, inputValue: inputValue, setInputValue: setInputValue, className: className, label: label, helperText: helperText, disabled: disabled, inputFocus: inputFocus, placeholder: placeholder, defaultValue: defaultValue, endIcon: endIcon, iconClickCallBack: iconClickCallBack, multiLangKeyboard: multiLangKeyboard, rhfRegister: rhfRegister, ref: ref, setValue: setValue, startIcon: startIcon, clearErrors: clearErrors, rhfOptions: rhfOptions, children: [inputValue && passwordStrengthCheck && (_jsx("p", { className: clsx("rgi-passwordStrengthCheck", passwordStrengthData[passwordStrength(inputValue).id].color), children: (_b = passwordStrengthData[passwordStrength(inputValue).id]) === null || _b === void 0 ? void 0 : _b.text })), _jsx(BaseInput, __assign({}, props, { type: showPassword ? "text" : "password", onChange: function (e) {
                    rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.onChange(e);
                    setInputValue(passwordCharChecker(e));
                    onChange === null || onChange === void 0 ? void 0 : onChange(__assign(__assign({}, e), { target: __assign(__assign({}, e.target), { value: passwordCharChecker(e) }) }));
                    rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.onChange(e);
                }, inputValue: inputValue, rhfRegister: rhfRegister, iconClickCallBack: iconClickCallBack, setInputFocus: setInputFocus, required: required, name: name, placeholder: placeholder })), _jsx("span", { onClick: function () { return setShowPassword(!showPassword); }, className: clsx(showPassword ? "icon-Eye !text-xl" : "icon-Hide-Password", "rgi-passwordIconClassName", endIcon && "justify-center") })] }));
};
export default BasePasswordInput;
//# sourceMappingURL=BasePasswordInput.js.map