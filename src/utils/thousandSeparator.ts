import { addCommas } from "./addCommas";
import { removeNonNumeric } from "./removeNonNumeric";
const removeZero = (num: string) => num.toString().replace(/^0+/, "");
export const thousandSeparator = (e: React.ChangeEvent<HTMLInputElement>) => {
  return addCommas(removeZero(removeNonNumeric(e.target.value)));
};
