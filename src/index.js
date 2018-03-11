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


    // Finding max consecutive sequence.
    var sortedArrLen = sortedArr.length,
        count = 1,
        maxLen = 0;

    for (let i = 0; i < sortedArrLen - 1; i++) {
        if (sortedArr[i + 1] - sortedArr[i] === 1) {
            count++;
        } else {
            count = 1;
        }
        if (maxLen < count) {
            maxLen = count;
        }
    }

    // Function return statement.
    return maxLen;
}