import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
var BaseInput = function (_a) {
    var _b;
    var maxLength = _a.maxLength, rhfRegister = _a.rhfRegister, type = _a.type, onBlur = _a.onBlur, dir = _a.dir, name = _a.name, iconClickCallBack = _a.iconClickCallBack, onChange = _a.onChange, inputValue = _a.inputValue, setInputFocus = _a.setInputFocus, thousandSeparate = _a.thousandSeparate, props = __rest(_a, ["maxLength", "rhfRegister", "type", "onBlur", "dir", "name", "iconClickCallBack", "onChange", "inputValue", "setInputFocus", "thousandSeparate"]);
    return (_jsx("input", __assign({ autoComplete: "new-password", name: (_b = rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.name) !== null && _b !== void 0 ? _b : name, ref: rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.ref, value: inputValue, type: type === "number" ? "text" : type, onFocus: function () {
            setInputFocus(true);
        }, onKeyDown: function (e) {
            e.key == "Enter" && (iconClickCallBack === null || iconClickCallBack === void 0 ? void 0 : iconClickCallBack(inputValue));
        }, onChange: function (e) {
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, onBlur: function (e) {
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
            !thousandSeparate && (rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.onBlur(e));
            setInputFocus(false);
        } }, (dir === "ltr" ? { dir: "ltr" } : {}), { className: clsx("baseInputClassName", dir === "ltr" && "text-left placeholder:text-right") }, props, { required: false })));
};
export default BaseInput;
//# sourceMappingURL=BaseInput.js.map