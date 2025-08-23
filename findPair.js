class Solution {
    relativeSort(arr1, arr2) {
        // code here
        let res = [];
        let m = new Map();
        for (let i = 0; i < arr1.length; i++) {
            m.set(arr[i], (m.get(arr[i]) || 0) + 1);
        }

        for (let i = 0; i < arr2.length; i++) {
            if (m.has(arr2[i])) {
                while (m.get(arr2[i]) > 0) {
                    res.push(arr2[i]);
                    m.get(arr2[i]) - 1;
                }
                m.delete(arr2[i]);
            }
        }
        return [...res, ...m.entries().sort((a, b) => a - b)];
    }
}
