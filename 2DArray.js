function matrixDiagonalSum(mat) {
    const cols = mat[0].length;
    const rows = mat.length;
    let pDiagonalSum = 0;
    for (let i = 0; i < rows; i++) {
        pDiagonalSum += mat[i][i];
    }

    return pDiagonalSum;
}

function maxColSum(mat, rows, cols) {
    let maxColSum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < cols; i++) {
        let colSumJ = 0;
        for (let j = 0; j < rows; j++) {
            colSumJ += mat[j][i];
        }

        maxColSum = Math.max(maxColSum, colSumJ);
    }

    return maxColSum;
}
function TwoDimArray(key) {
    let rows = 3,
        cols = 4;
    let matrix = Array.from({ length: rows }, () => new Array(cols));
    matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ];

    // for (let i = 0; i < rows; i++) {
    //     for (let j = 0; j < cols; j++) {
    //         if (matrix[i][j] === key) {
    //             return `[${i}][${j}]`;
    //         }
    //     }
    // }

    return matrixDiagonalSum(matrix);
}

console.log(TwoDimArray(7));
