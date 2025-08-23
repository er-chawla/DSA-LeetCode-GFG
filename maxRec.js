/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let res = largestRectangleInHistogram(matrix[0]);
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (+matrix[i][j] !== 0) {
                matrix[i][j] = +matrix[i - 1][j] + +matrix[i][j];
            } else {
                matrix[i][j] = 0;
            }
        }
        res = Math.max(res, largestRectangleInHistogram(matrix[i]));
    }

    return res;
};

var prevSmallerElement = function (arr) {
    let stack = [];
    let ps = new Array(arr.length);

    stack.push(-1);
    for (let i = 0; i < arr.length; i++) {
        while (stack.length && +arr[stack.at(-1)] >= +arr[i]) {
            stack.pop();
        }

        ps[i] = stack.at(-1);
        stack.push(i);
    }

    return ps;
};

var nextSmallerElement = function (arr) {
    let stack = [];
    let ns = new Array(arr.length);
    stack.push(-1);
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length && +arr[stack.at(-1)] >= +arr[i]) {
            stack.pop();
        }

        ns[i] = stack.at(-1);
        stack.push(i);
    }

    return ns;
};

var largestRectangleInHistogram = function (arr) {
    let res = 0;

    let ps = prevSmallerElement(arr);
    let ns = nextSmallerElement(arr);
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let l = arr[i];
        if (ns[i] === -1) {
            ns[i] = n;
        }
        let b = ns[i] - ps[i] - 1;
        let newArea = l * b;
        res = Math.max(res, newArea);
    }

    return res;
};

const matrix = [
    ['0', '1'],
    ['1', '0'],
];

console.log(maximalRectangle(matrix));
