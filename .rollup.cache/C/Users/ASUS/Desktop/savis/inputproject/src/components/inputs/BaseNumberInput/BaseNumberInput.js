import { __assign, __read, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import BaseInput from "../BaseInput/BaseInput";
import { useEffect, useState } from "react";
import TextInputWrapper from "../TextInputWrapper/TextInputWrapper";
import { addCommas } from "@/utils/addCommas";
import { removeNonNumeric } from "@/utils/removeNonNumeric";
import { thousandSeparator } from "@/utils/thousandSeparator";
var BaseNumberInput = function (_a) {
    var rhfRegister = _a.rhfRegister, onChange = _a.onChange, haveKeyboard = _a.haveKeyboard, numericKeyboard = _a.numericKeyboard, defaultValue = _a.defaultValue, placeholder = _a.placeholder, disabled = _a.disabled, dir = _a.dir, name = _a.name, iconClickCallBack = _a.iconClickCallBack, className = _a.className, label = _a.label, _b = _a.helperText, helperText = _b === void 0 ? "" : _b, _c = _a.error, error = _c === void 0 ? false : _c, _d = _a.required, required = _d === void 0 ? false : _d, iconVariant = _a.iconVariant, _e = _a.thousandSeparate, thousandSeparate = _e === void 0 ? false : _e, labelClassName = _a.labelClassName, inputClassName = _a.inputClassName, endIcon = _a.endIcon, multiLangKeyboard = _a.multiLangKeyboard, ref = _a.ref, setValue = _a.setValue, startIcon = _a.startIcon, wrapperStyle = _a.wrapperStyle, clearErrors = _a.clearErrors, rhfOptions = _a.rhfOptions, helperTextClassName = _a.helperTextClassName, props = __rest(_a, ["rhfRegister", "onChange", "haveKeyboard", "numericKeyboard", "defaultValue", "placeholder", "disabled", "dir", "name", "iconClickCallBack", "className", "label", "helperText", "error", "required", "iconVariant", "thousandSeparate", "labelClassName", "inputClassName", "endIcon", "multiLangKeyboard", "ref", "setValue", "startIcon", "wrapperStyle", "clearErrors", "rhfOptions", "helperTextClassName"]);
    var _f = __read(useState(false), 2), inputFocus = _f[0], setInputFocus = _f[1];
    var _g = __read(useState(thousandSeparate ? addCommas(defaultValue || "") : defaultValue !== null && defaultValue !== void 0 ? defaultValue : ""), 2), inputValue = _g[0], setInputValue = _g[1];
    useEffect(function () {
        thousandSeparate
            ? setInputValue(addCommas(removeNonNumeric(defaultValue || "")))
            : setInputValue(defaultValue || "");
    }, [defaultValue]);
    return (_jsx(TextInputWrapper, { wrapperStyle: wrapperStyle, inputClassName: inputClassName, labelClassName: labelClassName, iconVariant: iconVariant, required: required, error: error, label: label, numericKeyboard: numericKeyboard, haveKeyboard: haveKeyboard, inputValue: inputValue, setInputValue: setInputValue, className: className, helperText: helperText, disabled: disabled, inputFocus: inputFocus, placeholder: placeholder, defaultValue: defaultValue, endIcon: endIcon, iconClickCallBack: iconClickCallBack, multiLangKeyboard: multiLangKeyboard, rhfRegister: rhfRegister, ref: ref, setValue: setValue, startIcon: startIcon, thousandSeparate: thousandSeparate, clearErrors: clearErrors, rhfOptions: rhfOptions, helperTextClassName: helperTextClassName, children: _jsx(BaseInput, __assign({}, props, { type: thousandSeparate ? "text" : "number", inputValue: inputValue, onChange: function (e) {
                var rawValue = removeNonNumeric(e.target.value);
                var formattedValue = thousandSeparate
                    ? thousandSeparator(e)
                    : rawValue;
                setInputValue(formattedValue);
                rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.onChange({ target: { name: name, value: rawValue } });
                onChange === null || onChange === void 0 ? void 0 : onChange(__assign(__assign({}, e), { target: __assign(__assign({}, e.target), { value: rawValue }) }));
            }, thousandSeparate: thousandSeparate, rhfRegister: rhfRegister, placeholder: placeholder, disabled: disabled, name: name, iconClickCallBack: iconClickCallBack, setInputFocus: setInputFocus })) }));
};
export default BaseNumberInput;
//# sourceMappingURL=BaseNumberInput.js.map