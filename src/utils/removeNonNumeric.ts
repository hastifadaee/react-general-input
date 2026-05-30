import { convertFarsiToEn } from "./convertFarsiToEn";

export const removeNonNumeric = (val: number | string): string => {
  const value = convertFarsiToEn(val.toString());
  return value.replace(/[^0-9]/g, "");
};
