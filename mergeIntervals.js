/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    countTriangles(arr) {
        // code here
        arr.sort((a, b) => a - b);
        let res = 0;
        for (let i = 2; i < arr.length; i++) {
            let j = 0,
                k = i - 1;

            while (j < k) {
                if (arr[j] + arr[k] > arr[i]) {
                    res += k - j;
                    k--;
                } else {
                    j++;
                }
            }
        }

        return res;
    }
}

const arr = [4, 6, 3, 7];
const sl = new Solution();
const res = sl.countTriangles(arr);
console.log(res);
