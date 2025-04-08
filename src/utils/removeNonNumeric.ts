import { convertFarsiToEn } from "./convertFarsiToEn";

export const removeNonNumeric = (value: string): string => {
  value = convertFarsiToEn(value);
  return value.replace(/[^0-9]/g, "");
};
