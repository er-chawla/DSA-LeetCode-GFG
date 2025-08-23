/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let n = letters.length,
        i = 0,
        j = n - 1;
    let idx = 0,
        tAscii = target.charCodeAt();
    while (i <= j) {
        const mid = Math.floor((i + j) / 2);
        const mAscii = letters[mid].charCodeAt(),
            mLAscii = letters[mid - 1]?.charCodeAt(),
            mNAscii = letters[mid + 1]?.charCodeAt();
        if (mid < n && mAscii <= tAscii && mNAscii > tAscii) {
            idx = mid + 1;
            break;
        } else if (mid > 0 && mLAscii < tAscii && mAscii > tAscii) {
            idx = mid;
            break;
        } else if (mAscii <= tAscii && mNAscii <= tAscii) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    return letters[idx];
};

const letters = ['e', 'e', 'e', 'e', 'e', 'e', 'n', 'n', 'n', 'n'],
    target = 'e';
console.log(nextGreatestLetter(letters, target));
