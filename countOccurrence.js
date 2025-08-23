var countOccurrence = function (arr, k) {
    const m = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (m.has(arr[i])) {
            m.set(arr[i], m.get(arr[i]) + 1);
        } else if (m.size < k) {
            m.set(arr[i], 1);
        } else {
            for (let [key, val] of m.entries()) {
                m.set(key, m.get(key) - 1);
                if (m.get(key) === 0) m.delete(key);
            }
        }
    }

    m;

    for (let [key] of m.entries()) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === key) {
                count++;
            }
        }

        if (count >= Math.floor(arr.length / k)) {
            console.log(key);
        }
    }
};

const arr = [30, 10, 20, 20, 20, 10, 40, 30, 30];
countOccurrence(arr, 3);
