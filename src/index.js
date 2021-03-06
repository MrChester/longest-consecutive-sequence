module.exports = function longestConsecutiveLength(array) {
    // Common variables
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

    var sortedArr = [];
    if (!isSorted) {
        sortedArr = mergeSort(array);
    } else {
        sortedArr = array;
    }

    // Sorting area. Merge Sort.
    function mergeSort(array) {
        var arrLen = array.length;
        if (arrLen === 1) {
            return array;
        }

        const middle = Math.floor(arrLen / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);

        return merge(
            mergeSort(left),
            mergeSort(right)
        )
    };

    function merge(left, right) {
        let result = [],
            leftLen = left.length,
            rightLen = right.length,
            indexLeft = 0,
            indexRight = 0;

        while (indexLeft < leftLen && indexRight < rightLen) {
            if (left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft]);
                indexLeft++;
            } else {
                result.push(right[indexRight]);
                indexRight++;
            }
        }

        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
    };


    // Finding max consecutive sequence.
    var sortedArrLen = sortedArr.length,
        count = 1,
        maxLen = 0;

    for (let i = 0; i < sortedArrLen - 1; i++) {
        if (sortedArr[i + 1] - sortedArr[i] === 1) {
            count++;
        } else if (sortedArr[i] === sortedArr[i + 1]) {
            count += 0;
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