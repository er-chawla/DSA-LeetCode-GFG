/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
    let i = 0,
        j = s.length - 1;
    let minLength = s.length;
    let sArr = s.split('');
    while (i < j) {
        while (sArr[i] === sArr[i + 1]) {
            i++;
        }

        while (sArr[j] === sArr[j - 1]) {
            j--;
        }

        if (i > j) {
            return 0;
        }

        if (sArr[i] === sArr[j]) {
            minLength = j - i - 1;
            i++;
            j--;
        } else {
            return minLength;
        }
    }
    return minLength;
};

const s =
    'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbacccabbabccaccbacaaccacacccaccbbbacaabbccbbcbcbcacacccccccbcbbabccaacaabacbbaccccbabbcbccccaccacaccbcbbcbcccabaaaabbbbbbbbbbbbbbb';
// const s = 'ca';
console.log(minimumLength(s));
