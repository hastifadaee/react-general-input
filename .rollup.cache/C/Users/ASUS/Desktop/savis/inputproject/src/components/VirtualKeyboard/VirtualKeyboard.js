import { __read } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu, MenuHandler } from "@material-tailwind/react";
import Keyboard from "react-simple-keyboard";
import { useEffect, useRef, useState } from "react";
import "simple-keyboard/build/css/index.css";
import { reverseString } from "@/utils/reverseString";
import { english, farsi, numeric } from "./keyboardLayouts";
var VirtualKeyboard = function (_a) {
    var isKeyboardShow = _a.isKeyboardShow, setIsKeyboardShow = _a.setIsKeyboardShow, keyboardOnChange = _a.keyboardOnChange, _b = _a.isNumeric, isNumeric = _b === void 0 ? false : _b, _c = _a.multiLang, multiLang = _c === void 0 ? false : _c, handleBackSpace = _a.handleBackSpace;
    var layoutName = { english: english, farsi: farsi };
    var keyboard = useRef(null);
    var _d = __read(useState("default"), 2), layout = _d[0], setLayout = _d[1];
    var _e = __read(useState(english), 2), langLayout = _e[0], setLangLayout = _e[1];
    var reverseKeyboard = function (keyboard) {
        var defaultKey = keyboard.default.map(function (line) {
            return reverseString(line);
        });
        var shiftKey = keyboard.shift.map(function (line) {
            return reverseString(line);
        });
        return { default: defaultKey, shift: shiftKey };
    };
    var onKeyPress = function (button) {
        if (button === "{shift}" || button === "{lock}")
            handleShift();
        if (button === "{bksp}")
            handleBackSpace();
        else
            keyboardOnChange(button);
    };
    var handleShift = function () {
        var newLayoutName = layout === "default" ? "shift" : "default";
        setLayout(newLayoutName);
    };
    useEffect(function () {
        if (!isKeyboardShow)
            setLangLayout(english);
        if (isNumeric)
            setLangLayout(numeric);
    }, [isKeyboardShow]);
    return (_jsxs(Menu, { handler: setIsKeyboardShow, open: isKeyboardShow, children: [_jsx(MenuHandler, { children: _jsx("span", { onClick: function () { return setIsKeyboardShow(function (prev) { return !prev; }); }, className: "icon-Keyboard mr-1 !text-xl cursor-pointer text-primary-5" }) }), _jsx("menu", { className: "w-full sm:w-fit z-[9999]", children: _jsx(Keyboard, { theme: isNumeric
                        ? "hg-theme-default hg-layout-numeric numeric-theme"
                        : "hg-theme-default", layoutName: layout, layout: reverseKeyboard(langLayout), keyboardRef: function (r) { return (keyboard.current = r); }, 
                    // onChange={keyboardOnChange}
                    onKeyPress: onKeyPress }) })] }));
};
export default VirtualKeyboard;
//# sourceMappingURL=VirtualKeyboard.js.map