var persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
], arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
export function convertToENDateNumbers(str) {
    var _a;
    for (var i = 0; i < 10; i++) {
        str = (_a = str === null || str === void 0 ? void 0 : str.replace(persianNumbers[i], i.toString())) === null || _a === void 0 ? void 0 : _a.replace(arabicNumbers[i], i.toString());
    }
    var parts = str.split('/');
    var year = parts[0];
    var month = parts[1].padStart(2, '0');
    var day = parts[2].padStart(2, '0');
    return "".concat(year, "/").concat(month, "/").concat(day);
}
export function convertToENNumbers(str) {
    var _a;
    for (var i = 0; i < 10; i++) {
        str = (_a = str === null || str === void 0 ? void 0 : str.replace(persianNumbers[i], i.toString())) === null || _a === void 0 ? void 0 : _a.replace(arabicNumbers[i], i.toString());
    }
    return str;
}
//# sourceMappingURL=convertNumbersToEN.js.map