class Solution {
    relativeSort(arr1, arr2) {
        let m = new Map(),
            idx = 0;
        for (let num1 of arr1) {
            m.set(num1, (m.get(num1) || 0) + 1);
        }

        for (const num of arr2) {
            if (m.has(num)) {
                while (m.get(num) > 0) {
                    arr1[idx++] = num;
                    m.set(num, m.get(num) - 1);
                }
                m.delete(num);
            }
        }

        const rest = [];
        for (let [key, val] of m.entries()) {
            while (val > 0) {
                rest.push(key);
                val--;
            }
        }
        rest.sort((a, b) => a - b);
        for (let num of rest) {
            arr1[idx++] = num;
        }
    }
}

const arr1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8],
    arr2 = [2, 1, 8, 3];
new Solution().relativeSort(arr1, arr2);
console.log(arr1);
