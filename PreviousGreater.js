function previousGreater(arr) {
    let st = [];
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        while (st.length > 0 && arr[st[st.length - 1]] < arr[i]) {
            st.pop();
        }

        if (st.length === 0) {
            res.push(-1);
        } else {
            res.push(arr[st[st.length - 1]]);
        }
        st.push(i);
    }
    return res;
}

const arr = [60, 10, 20, 40, 35, 30, 50, 70];
const res = previousGreater(arr);
console.log(res);
