var checkSubarraySum = function (nums, k) {
    let s = new Map();
    s.set(0, -1);
    let pre_sum = 0;
    for (let i = 0; i < nums.length; i++) {
        pre_sum += nums[i];

        const rem = pre_sum % k;
        if (s.has(rem)) {
            if (i - s.get(rem) >= 2) {
                return true;
            }
        } else {
            s.set(rem, i);
        }
    }

    return false;
};
const nums = [1],
    k = 1;
checkSubarraySum(nums, k);
