import { convertFarsiToEn } from "./convertFarsiToEn";
export var removeNonNumeric = function (val) {
    var value = convertFarsiToEn(val.toString());
    return value.replace(/[^0-9]/g, "");
};
//# sourceMappingURL=removeNonNumeric.js.map