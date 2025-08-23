function nextGreater(arr) {
    let st = [];
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (st.length > 0 && st[st.length - 1] <= arr[i]) {
            st.pop();
        }

        if (st.length === 0) {
            res.push(-1);
        } else {
            res.push(st[st.length - 1]);
        }
        st.push(arr[i]);
    }

    for (let i = res.length - 1; i >= 0; i--) {
        console.log(res[i]);
    }
}

const arr = [25, 20, 15, 10];

nextGreater(arr);
