export var convertFarsiToEn = function (input) {
    var farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return input.replace(/[۰-۹]/g, function (match) {
        return farsiDigits.indexOf(match).toString();
    });
};
//# sourceMappingURL=convertFarsiToEn.js.map