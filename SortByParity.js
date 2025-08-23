/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let lo = -1,
        hi = nums.length;
    while (lo < hi) {
        do {
            lo++;
        } while (lo < nums.length && nums[lo] % 2 === 0);
        do {
            hi--;
        } while (hi > 0 && nums[hi] % 2 !== 0);
        if (lo > hi) return nums;
        [nums[lo], nums[hi]] = [nums[hi], nums[lo]];
    }
};

const nums = [1, 3];
sortArrayByParity(nums);
