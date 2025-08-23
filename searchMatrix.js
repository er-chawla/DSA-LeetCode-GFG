/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let n = letters.length,
        i = 0;
    j = n - 1;
    let idx = 0,
        tAscii = target.charCodeAt();
    while (i <= j) {
        const mid = Math.floor((i + j) / 2);
        const mAscii = letter.charCodeAt(mid),
            mLAscii = letter.charCodeAt(mid - 1),
            mNAscii = letter.charCodeAt(mid + 1);
        if (
            mAscii === tAscii ||
            (mid > 0 && mLAscii < tAscii && mAscii > tAscii)
        ) {
            idx = mid;
        } else if (mid < n && mAscii < tAscii && mNAscii > tAscii) {
            id = mid + 1;
        } else if (mAscii < tAscii && mNAscii < tAscii) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    return letter[idx];
};
