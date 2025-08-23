/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let sMap = new Map();
    let guessArray = guess.split('');
    for (let i = 0; i < secret.length; i++) {
        sMap.set(secret[i], (sMap.get(secret[i]) || 0) + 1);
    }

    let x = 0;
    for (let i = 0; i < guessArray.length; i++) {
        if (secret[i] === guessArray[i]) {
            x++;
            sMap.set(secret[i], (sMap.get(secret[i]) || 0) - 1);
            guessArray[i] = -1;
            if (sMap.get(guessArray[i]) === 0) {
                sMap.delete(guessArray[i]);
            }
        }
    }

    let y = 0;
    for (let gVal of guessArray) {
        if (sMap.has(gVal) && sMap.get(gVal) > 0) {
            y++;
            sMap.set(gVal, (sMap.get(gVal) || 0) - 1);
            if (sMap.get(gVal) === 0) {
                sMap.delete(gVal);
            }
        }
    }

    return `${x}A${y}B`;
};

const secret = '1122',
    guess = '1222';
console.log(getHint(secret, guess));
