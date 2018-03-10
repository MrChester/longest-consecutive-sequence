module.exports = function mergeSort(array) {
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