var countDistElmInWindow = function (nums, k) {
    const m = new Map();
    const res = [];
    for (let i = 0; i < k; i++) {
        if (m.has(nums[i])) {
            m.set(nums[i], m.get(nums[i]) + 1);
        } else {
            m.set(nums[i], 1);
        }
    }
    res.push(m.size);
    for (let i = k; i < nums.length; i++) {
        m.set(nums[i - k], m.get(nums[i - k]) - 1);
        if (m.get(nums[i - k]) === 0) m.delete(nums[i - k]);
        if (m.has(nums[i])) {
            m.set(nums[i], m.get(nums[i]) + 1);
        } else {
            m.set(nums[i], 1);
        }
        res.push(m.size);
    }
    for (const val of res) {
        console.log(val);
    }
};

const nums = [10, 20, 20, 10, 30, 40, 10],
    k = 4;
countDistElmInWindow(nums, 4);
