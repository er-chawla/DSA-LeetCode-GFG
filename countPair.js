/**
 * @param {number[]} arr
 * @param {number[]} brr
 * @returns {number}
 */

class Solution {
    countPairs(arr, brr) {
        // code here
        let ans = 0;
        let count = new Array(5).fill(0);

        arr.sort((a, b) => a - b);
        brr.sort((a, b) => a - b);

        for (let i = 0; i < brr.length; i++) {
            if (brr[i] === 1) count[1] += 1;
            else if (brr[i] === 2) count[2]++;
            else if (brr[i] === 3) count[3]++;
            else if (brr[i] === 4) count[4]++;
        }

        let j = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 1) {
                continue;
            } else {
                ans += count[1];
                while (j < brr.length && brr[j] <= arr[i]) {
                    j++;
                }

                ans += brr.length - j;

                if (arr[i] === 2) {
                    ans -= count[3];
                    ans -= count[4];
                } else if (arr[i] === 3) {
                    ans += count[2];
                }
            }
        }

        return ans;
    }
}

const arr = [2, 3, 4, 5],
    brr = [1, 2, 3];
const sl = new Solution();
const res = sl.countPairs(arr, brr);
console.log(res);
