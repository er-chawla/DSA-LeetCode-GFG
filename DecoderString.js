function decodeString(str) {
    let st = [];

    for (let ch of str) {
        if (/[0-9a-z]/.test(ch)) {
            st.push(ch);
        } else if (ch === '[') {
            st.push(ch);
        } else if (ch === ']') {
            res = '';
            while (st.length && st.at(-1) !== '[') {
                res += st.pop();
            }

            st.pop();
            let k = '';
            while (/[0-9]/.test(st.at(-1))) {
                k += st.pop();
            }
            k = +k.split('').reverse().join('');
            //let k = st.pop();
            while (k > 0) {
                for (let encode of res.split('').reverse()) {
                    st.push(encode);
                }
                k--;
            }
        }
    }

    return st.join('');
}

const st = '100[leetcode]';
console.log(decodeString(st));
