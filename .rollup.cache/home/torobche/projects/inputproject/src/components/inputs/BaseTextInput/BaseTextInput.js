import { __assign, __read, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import BaseInput from "../BaseInput/BaseInput";
import TextInputWrapper from "../TextInputWrapper/TextInputWrapper";
var BaseTextInput = function (_a) {
    var _b = _a.required, required = _b === void 0 ? false : _b, rhfRegister = _a.rhfRegister, onChange = _a.onChange, haveKeyboard = _a.haveKeyboard, numericKeyboard = _a.numericKeyboard, defaultValue = _a.defaultValue, maxLength = _a.maxLength, placeholder = _a.placeholder, type = _a.type, onBlur = _a.onBlur, disabled = _a.disabled, dir = _a.dir, name = _a.name, label = _a.label, iconClickCallBack = _a.iconClickCallBack, _c = _a.helperText, helperText = _c === void 0 ? "" : _c, _d = _a.error, error = _d === void 0 ? false : _d, className = _a.className, endIcon = _a.endIcon, startIcon = _a.startIcon, iconVariant = _a.iconVariant, inputClassName = _a.inputClassName, labelClassName = _a.labelClassName, multiLangKeyboard = _a.multiLangKeyboard, ref = _a.ref, setValue = _a.setValue, props = __rest(_a, ["required", "rhfRegister", "onChange", "haveKeyboard", "numericKeyboard", "defaultValue", "maxLength", "placeholder", "type", "onBlur", "disabled", "dir", "name", "label", "iconClickCallBack", "helperText", "error", "className", "endIcon", "startIcon", "iconVariant", "inputClassName", "labelClassName", "multiLangKeyboard", "ref", "setValue"]);
    var _e = __read(useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : ""), 2), inputValue = _e[0], setInputValue = _e[1];
    var _f = __read(useState(false), 2), inputFocus = _f[0], setInputFocus = _f[1];
    useEffect(function () {
        setInputValue(defaultValue || "");
    }, [defaultValue]);
    return (_jsx(TextInputWrapper, { inputClassName: inputClassName, labelClassName: labelClassName, required: required, haveKeyboard: haveKeyboard, numericKeyboard: numericKeyboard, inputValue: inputValue, setInputValue: setInputValue, label: label, error: error, helperText: helperText, className: className, disabled: disabled, inputFocus: inputFocus, placeholder: placeholder, startIcon: startIcon, endIcon: endIcon, iconClickCallBack: iconClickCallBack, iconVariant: iconVariant, defaultValue: defaultValue, multiLangKeyboard: multiLangKeyboard, rhfRegister: rhfRegister, ref: ref, setValue: setValue, children: _jsx(BaseInput, __assign({}, props, { inputValue: inputValue, onChange: function (e) {
                rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.onChange(e);
                setInputValue(e.target.value);
                onChange === null || onChange === void 0 ? void 0 : onChange(e);
                rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.onChange(e);
            }, rhfRegister: rhfRegister, placeholder: placeholder, disabled: disabled, iconClickCallBack: iconClickCallBack, setInputFocus: setInputFocus, name: name })) }));
};
export default BaseTextInput;
//# sourceMappingURL=BaseTextInput.js.map