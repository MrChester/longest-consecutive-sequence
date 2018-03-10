module.exports = function longestConsecutiveLength(array) {
    const mergeSort = require('./mergeSort');
    var arrLen = array.length;

    if (arrLen === 0) {
        return 0;
    } else if (arrLen === 1) {
        return 1;
    }


    // for (let i = 0; i < arrLen - 1; i++) {
    //     if (array[i] <= array[i + 1]) {
    //         sortArrFlag = true;
    //     } else {
    //         sortArrFlag = false;
    //         break;
    //     }
    // }

    var sortedArr = mergeSort(array);
    // if (!sortArrFlag) {
    //     sortedArr = mergeSort(array);
    // } else {
    //     sortedArr = array;
    // }

    var consecutiveLengthArr = [],
        sortedArrLen = sortedArr.length,
        flag = false,
        count = 1;

    for (let i = 0; i < sortedArrLen - 1; i++) {
        if (sortedArr[i + 1] - sortedArr[i] === 1 || sortedArr[i] === sortedArr[i + 1]) {
            count++;
            flag = true;
            if (i === (sortedArrLen - 1)) {
                count += 1;
            }
        } else {
            flag = false;
            consecutiveLengthArr.push(count);
            count = 1;
        }
    }

    if (flag) {
        consecutiveLengthArr.push(count);
    }

    var maxLen = consecutiveLengthArr[0];

    for (let i = 1; i < consecutiveLengthArr.length; i++) {
        if (maxLen < consecutiveLengthArr[i]) {
            maxLen = consecutiveLengthArr[i];
        }
    }

    return maxLen;
}