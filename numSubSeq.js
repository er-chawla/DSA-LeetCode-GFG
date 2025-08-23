var numSubSeq = function (nums, target) {
    nums.sort((a, b) => a - b);

    while (i < j) {
        if (nums[i] + nums[j] > target) {
            j--;
        } else {
            break;
        }
    }

    let;
};

const nums = [3, 5, 6, 7],
    target = 9;
numSubSeq(nums, target);
