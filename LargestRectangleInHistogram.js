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

const arr = [1, 1];

///PSE
/// -1 -1  1  1 -1  4  5
///NSE
///  1  4  3  4  7  7  7

/// Curr = i - PS[i] - 1

/// Curr = NSE[i] - i - 1;
console.log(largestRectangleInHistogram(arr));
