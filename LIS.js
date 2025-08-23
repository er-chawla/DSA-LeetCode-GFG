/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let res = [];
    const binarySearch = (tar) => {
        let i = 0,
            j = res.length - 1;
        while (i <= j) {
            const mid = Math.floor((i + j) / 2);
            if (res[mid] === tar) {
                return mid;
            } else if (res[mid] < tar) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        return i;
    };

    const constructSubSequence = (idx, num) => {
        let n = res.length;
        for (let i = n - 1; i >= idx; i--) {
            res.pop();
        }
        res.push(num);
    };
    for (let num of nums) {
        if (!res.length || res[res.length - 1] < num) {
            res.push(num);
        } else {
            const idx = binarySearch(num);
            res[idx] = num;
        }
    }
    return res.length;
};

const nums = [0, 1, 0, 3, 2, 3];

console.log(lengthOfLIS(nums));
