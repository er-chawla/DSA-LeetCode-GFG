/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let j = i + 1;
        if (
            (nums[i] % 2 === 0 && i % 2 === 0) ||
            (nums[i] % 2 !== 0 && i % 2 !== 0)
        ) {
            continue;
        } else if (nums[i] % 2 === 0 && i % 2 !== 0) {
            while (j < n && nums[j] % 2 === 0) {
                j++;
            }
        } else {
            while (j < n && nums[j] % 2 !== 0) {
                j++;
            }
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    return nums;
};

const nums = [888, 505, 627, 846];
sortArrayByParityII(nums);
console.log(nums);
