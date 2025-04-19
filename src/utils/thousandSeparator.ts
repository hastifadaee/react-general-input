import { addCommas } from "./addCommas";
import { removeNonNumeric } from "./removeNonNumeric";
const removeZero = (num: string) => num.toString().replace(/^0+/, "");
export const thousandSeparator = (e: React.ChangeEvent<HTMLInputElement>) => {
  return addCommas(removeNonNumeric(e.target.value));
};
