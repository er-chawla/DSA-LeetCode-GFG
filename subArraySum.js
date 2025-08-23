var subArraySum = function (arr, tar) {
    let s = new Map(),
        preSum = 0,
        res = 0;
    for (let i = 0; i < arr.length; i++) {
        preSum += arr[i];
        if (preSum === tar) res += 1;
        let val = preSum - tar;
        if (s.has(val)) {
            res += s.get(val);
        }
        s.set(preSum, (s.get(preSum) || 0) + 1);
    }

    s;
    res;
    return res;
};

const arr = [10, 2, -2, -20, 10],
    tar = -10;
subArraySum(arr, tar);
