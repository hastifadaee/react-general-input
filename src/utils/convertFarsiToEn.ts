export const convertFarsiToEn = (input: string): string => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return input.replace(/[۰-۹]/g, (match) =>
    farsiDigits.indexOf(match).toString()
  );
};
