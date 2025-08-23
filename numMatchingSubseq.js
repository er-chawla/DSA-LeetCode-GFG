var chocolateDist = function (arr) {
    arr.sort((a, b) => a - b);
    let minDiff = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i + m - 1 < arr.length; i++) {
        minDiff = Math.min(arr[i + m - 1] - arr[0], minDiff);
    }
    return minDiff;
};

let arr = [3, 4, 1, 9, 56, 7, 9, 12],
    m = 5;
let res = chocolateDist(arr, m);
console.log(res);
