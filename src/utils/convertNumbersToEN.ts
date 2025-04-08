var persianNumbers = [
  /۰/g,
  /۱/g,
  /۲/g,
  /۳/g,
  /۴/g,
  /۵/g,
  /۶/g,
  /۷/g,
  /۸/g,
  /۹/g,
],
arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
export function convertToENDateNumbers(str: string) {
for (var i = 0; i < 10; i++) {
  str = str
    ?.replace(persianNumbers[i], i.toString())
    ?.replace(arabicNumbers[i], i.toString());
}
let parts = str.split('/');
let year = parts[0];
let month = parts[1].padStart(2, '0');
let day = parts[2].padStart(2, '0');


return `${year}/${month}/${day}`;
}

export function convertToENNumbers(str: string) {
  for (var i = 0; i < 10; i++) {
    str = str
      ?.replace(persianNumbers[i], i.toString())
      ?.replace(arabicNumbers[i], i.toString());
  }

  return str;
}