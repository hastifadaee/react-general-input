import { convertFarsiToEn } from "./convertFarsiToEn";
export var removeNonNumeric = function (value) {
    value = convertFarsiToEn(value);
    return value.replace(/[^0-9]/g, "");
};
//# sourceMappingURL=removeNonNumeric.js.map