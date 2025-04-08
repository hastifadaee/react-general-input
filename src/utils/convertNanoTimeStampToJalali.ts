export const NTSToJalali = (nanoTimeStamp: string | undefined) => {
  return new Date(Number(nanoTimeStamp) / 1000000).toLocaleDateString("fa-IR");
};
