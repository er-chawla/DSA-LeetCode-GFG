/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let n = arr.length - 1,
        count = 0;
    for (let i = 0; i <= n; i++) {
        if (arr[i] === 0) {
            count += 2;
        } else {
            count += 1;
        }
    }
    if (count === n) return;

    let i = n - (count - arr.length),
        j = n;

    while (i >= 0) {
        if (arr[i] === 0) {
            arr[j - 1] = arr[j] = 0;
            j -= 2;
        } else {
            arr[j] = arr[i];
            j -= 1;
        }
        i--;
    }
};

const arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
console.log(arr);
