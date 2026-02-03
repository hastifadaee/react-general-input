import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
var BaseInput = function (_a) {
    var _b, _c;
    var maxLength = _a.maxLength, rhfRegister = _a.rhfRegister, type = _a.type, onBlur = _a.onBlur, dir = _a.dir, name = _a.name, iconClickCallBack = _a.iconClickCallBack, onChange = _a.onChange, inputValue = _a.inputValue, setInputFocus = _a.setInputFocus, thousandSeparate = _a.thousandSeparate, required = _a.required, placeholder = _a.placeholder, formAdapter = _a.formAdapter, props = __rest(_a, ["maxLength", "rhfRegister", "type", "onBlur", "dir", "name", "iconClickCallBack", "onChange", "inputValue", "setInputFocus", "thousandSeparate", "required", "placeholder", "formAdapter"]);
    return (_jsx("input", __assign({ autoComplete: "new-password", name: rhfRegister ? ((_b = rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.name) !== null && _b !== void 0 ? _b : name) : ((_c = formAdapter === null || formAdapter === void 0 ? void 0 : formAdapter.name) !== null && _c !== void 0 ? _c : name), ref: rhfRegister ? rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.ref : formAdapter === null || formAdapter === void 0 ? void 0 : formAdapter.ref, value: inputValue, type: type === "number" ? "text" : type, onFocus: function () {
            setInputFocus(true);
        }, onKeyDown: function (e) {
            e.key == "Enter" && (iconClickCallBack === null || iconClickCallBack === void 0 ? void 0 : iconClickCallBack(inputValue));
        }, onChange: function (e) {
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, onBlur: function (e) {
            var _a;
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
            !thousandSeparate &&
                (rhfRegister ? rhfRegister === null || rhfRegister === void 0 ? void 0 : rhfRegister.onBlur(e) : (_a = formAdapter === null || formAdapter === void 0 ? void 0 : formAdapter.onBlur) === null || _a === void 0 ? void 0 : _a.call(formAdapter));
            setInputFocus(false);
        } }, (dir === "ltr" ? { dir: "ltr" } : {}), { className: clsx("h-full transition-transform outline-none focus:!outline-none flex-grow !text-neutral-3 text-[10px] sm:text-xs md:text-sm  placeholder:text-neutral-6 focus:placeholder:opacity-0 placeholder:transition-opacity placeholder:delay-100 ease-linear rgi-baseInput", dir === "ltr" && "text-left placeholder:text-right") }, props, { placeholder: required ? placeholder + "*" : placeholder, required: false })));
};
export default BaseInput;
//# sourceMappingURL=BaseInput.js.map