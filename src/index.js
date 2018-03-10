module.exports = function longestConsecutiveLength(array) {
    const mergeSort = require('./mergeSort');
    var arrLen = array.length;

    if (arrLen === 0) {
        return 0;
    } else if (arrLen === 1) {
        return 1;
    }

    var sortedArr = mergeSort(array);
    var sortedArrLen = sortedArr.length;
    var count = 1;

    var maxLen = 0;
    for (let i = 0; i < sortedArrLen - 1; i++) {
        if (sortedArr[i + 1] - sortedArr[i] === 1 || sortedArr[i] === sortedArr[i + 1] || i === sortedArrLen - 1) {
            count++;
        } else {
            if (maxLen < count) {
                maxLen = count;
            }
            count = 1;
        }
    }

    return maxLen;
}