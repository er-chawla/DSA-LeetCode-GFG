/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let i = 0,
        res = 0;

    let preProduct = 1;

    for (let j = 0; j < nums.length; j++) {
        preProduct *= nums[j];
        if (preProduct < k) {
            res += j - i + 1;
        } else {
            while (preProduct >= k) {
                preProduct = preProduct / nums[i];
                i++;
            }
            if (j >= i) res += j - i + 1;
        }
    }

    return res;
};

const nums = [10, 5, 2, 6],
    k = 100;

console.log(numSubarrayProductLessThanK(nums, k)); // Output: 8
