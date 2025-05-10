import { addCommas } from "./addCommas";
import { removeNonNumeric } from "./removeNonNumeric";
var removeZero = function (num) { return num.toString().replace(/^0+/, ""); };
export var thousandSeparator = function (e) {
    return addCommas(removeNonNumeric(e.target.value));
};
//# sourceMappingURL=thousandSeparator.js.map