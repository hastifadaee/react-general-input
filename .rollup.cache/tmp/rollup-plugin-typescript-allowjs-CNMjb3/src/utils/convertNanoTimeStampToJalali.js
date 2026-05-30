export var NTSToJalali = function (nanoTimeStamp) {
    return new Date(Number(nanoTimeStamp) / 1000000).toLocaleDateString("fa-IR");
};
//# sourceMappingURL=convertNanoTimeStampToJalali.js.map