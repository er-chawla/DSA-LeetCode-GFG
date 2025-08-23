/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let nIdx = 0,
        n = nums.length;
    let res = [];
    const swap = (i, j) => {
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    };
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0) {
            nIdx++;
        }
    }
    for (let i = 0; i < n; i++) {
        nums[i] = nums[i] ** 2;
    }
    let i = 0,
        j = n - 1;
    while (i <= j) {
        if (nums[i] <= nums[j]) {
            res.push(nums[i]);
            i++;
        } else {
            res.push(nums[j]);
            j--;
        }
    }

    return res;
};

const nums = [-3, 0, 2];
console.log(sortedSquares(nums));
