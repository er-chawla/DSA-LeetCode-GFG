/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    let n = nums.length;
    let total = 0;
    nums.forEach((num) => (total += num));

    const target = total - x;
    let i = 0,
        window = 0;
    let res = 0;
    for (let j = 0; j < nums.length; j++) {
        if (window === target) {
            res = Math.max(res, j - i);
        }
        if (window + nums[j] <= target) {
            window += nums[j];
            if (window === target) {
                res = Math.max(res, j - i);
            }
        } else {
            window += nums[j];
            while (window > target) {
                window -= nums[i];
                i++;
            }
        }
    }

    if (res !== 0) {
        return nums.length - res - 1;
    }

    return -1;
};
const nums = [3, 2, 20, 1, 1, 3],
    x = 10;

console.log(minOperations(nums, x));
