/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
    let sum = 0;
    nums.forEach((num) => (sum += num));

    let maxEnd = nums[0],
        maxNormal = nums[0];
    let minEnd = nums[0],
        minNormal = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxEnd = Math.max(nums[i], maxEnd + nums[i]);
        maxNormal = Math.max(maxEnd, maxNormal);

        minEnd = Math.min(nums[i], minEnd + nums[i]);
        minNormal = Math.min(minEnd, minNormal);
    }

    if (maxNormal < 0) {
        return maxNormal;
    }

    return Math.max(maxNormal, sum - minNormal);
};

const nums = [1, -2, 3, -2];
maxSubarraySumCircular(nums);
[].slice();
