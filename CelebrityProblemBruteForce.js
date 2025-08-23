function celebrityProblemBruteForce(arr) {
    let celebrity = -1;
    for (let i = 0; i < arr.length; i++) {
        // check in Row
        let rowCheck = true;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i][j] !== 0) {
                rowCheck = false;
                break;
            }
        }
        let colCheck = true;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[j][i] !== 1) {
                colCheck = false;
                break;
            }
        }

        if (rowCheck && colCheck) {
            celebrity = i;
        }
    }

    return celebrity;
}

const arr = [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
];

console.log(celebrityProblem(arr));
