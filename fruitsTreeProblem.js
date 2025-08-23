/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let s = new Set();
    let maxWindow = 0,
        currWindow = 0;
    let i = 0,
        j = 0;
    while (j < fruits.length) {
        if (s.size < 2 || s.has(fruits[j])) {
            s.add(fruits[j]);
            currWindow += 1;
        } else {
            let prev = j - 1;
            while (prev >= i && fruits[prev] === fruits[j - 1]) {
                prev--;
            }
            s.delete(fruits[prev]);
            i = prev + 1;
            currWindow = j - i + 1;
            s.add(fruits[j]);
        }
        j++;
        maxWindow = Math.max(maxWindow, currWindow);
    }

    return maxWindow;
};

const fruits = [0, 1, 1, 4, 3];

console.log(totalFruit(fruits));
