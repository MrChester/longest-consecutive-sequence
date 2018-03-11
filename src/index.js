module.exports = function longestConsecutiveLength(array) {
    // Common variables
    const mergeSort = require('./mergeSort');
    var arrLen = array.length;

    // Checking of an array - if empty or has one elem within itself.
    if (arrLen === 0) {
        return 0;
    } else if (arrLen === 1) {
        return 1;
    }

    // Checking of an array - sorted or not. If not - call mergeSort() function.
    var isSorted = false;
    for (let i = 0; i < arrLen - 1; i++) {
        if (array[i] <= array[i + 1]) {
            isSorted = true;
        } else {
            isSorted = false;
            break;
        }
    }

    if (!isSorted) {
        sortedArr = mergeSort(array);
    } else {
        sortedArr = array;
    }


    // Finding msx consecutive sequence.
    var sortedArrLen = sortedArr.length,
        count = 1,
        maxLen = 0;

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

    // Function return statement.
    return maxLen;
}