/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPossibleSize = function (nums) {
    let st = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        while (st.length && st.at(-1) < nums[i]) {
            st.pop();
        }
        st;
        st.push(nums[i]);
    }

    return st.reverse();
};

const nums = [4, 2, 5, 3, 5];

console.log(maximumPossibleSize(nums));
