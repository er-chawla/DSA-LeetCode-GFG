/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
    let max = -1;
    let pre_match = 0;
    let j = -1;
    for (let i = 1; i < nums.length; i++) {
        if (
            nums[i] - nums[i - 1] === 1 &&
            (pre_match === -1 || pre_match === 0)
        ) {
            if (j === -1) {
                j = i - 1;
            }
            max = Math.max(max, i - j + 1);
            pre_match = 1;
        } else if (nums[i] - nums[i - 1] === -1 && pre_match === 1) {
            max = Math.max(max, i - j + 1);
            pre_match = -1;
        } else {
            if (j !== -1) {
                j = i - 1;
            }
        }
    }

    return max;
};
const nums = [14, 22, 18, 23, 27, 6, 6, 18, 19];

alternatingSubarray(nums);
