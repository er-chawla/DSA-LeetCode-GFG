function largestRectangleInHistogram(arr) {
    let res = 0;
    let ps = [],
        ns = [];
    let st = [];
    for (let i = 0; i < arr.length; i++) {
        while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
            st.pop();
        }

        ps[i] = st.length === 0 ? -1 : st[st.length - 1];
        st.push(i);
    }

    st = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) st.pop();

        ns[i] = st.length === 0 ? arr.length : st[st.length - 1];
        st.push(i);
    }

    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        curr += (i - ps[i] - 1) * arr[i];
        curr += (ns[i] - i - 1) * arr[i];
        res = Math.max(res, curr);
    }

    return res;
}

function largestRectangleInMatrix(mat) {
    let res = largestRectangleInHistogram(mat[0]);
    for (let i = 1; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] !== 0) {
                mat[i][j] = mat[i - 1][j] + mat[i][j];
            }
        }

        res = Math.max(res, largestRectangleInHistogram(mat[i]));
    }

    return res;
}
const mat = [
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
];

console.log(largestRectangleInMatrix(mat));
