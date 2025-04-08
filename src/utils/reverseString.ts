export const reverseString = (str: string): any => {
  if (str === "")
    return "";
  else return str.split(" ").reverse().join(" ");
};
