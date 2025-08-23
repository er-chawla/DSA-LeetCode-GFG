/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let n = nums.length;
    let i = Math.floor((n - 1) / 2);
    while (i >= 0) {
        maxHeapify(nums, i);
        i--;
    }

    nums;
    let elm;
    for (let i = 0; i < k; i++) {
        elm = extract(nums);
        console.log(elm);
    }

    return elm;
};

var left = function (i) {
    return 2 * i + 1;
};

var right = function (i) {
    return 2 * i + 2;
};

var maxHeapify = function (nums, i) {
    let n = nums.length;
    const lt = left(i),
        rt = right(i);
    let largest = i;
    if (lt < n && nums[lt] > nums[largest]) {
        largest = lt;
    }

    if (rt > 0 && nums[rt] > nums[largest]) {
        largest = rt;
    }

    if (largest !== i) {
        [nums[i], nums[largest]] = [nums[largest], nums[i]];
        maxHeapify(nums, largest);
    }
};

var extract = function (nums) {
    let n = nums.length;
    if (n === 0) {
        return;
    }
    [nums[0], nums[n - 1]] = [nums[n - 1], nums[0]];
    const elm = nums.pop();
    maxHeapify(nums, 0);

    return elm;
};

let nums = [3, 2, 1, 5, 6, 4],
    k = 2;

const res = findKthLargest(nums, k);
res;
