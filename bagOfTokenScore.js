/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
    let scores = 0,
        maxScore = 0;
    let i = 0,
        j = tokens.length - 1;
    tokens.sort((a, b) => a - b);
    while (i <= j) {
        if (scores === 0 && power >= tokens[i]) {
            power -= tokens[i];
            scores++;
            i++;
        } else if (scores >= 1) {
            power += tokens[j];
            j--;
            scores--;
        } else {
            return 0;
        }
        while (power >= tokens[i]) {
            power -= tokens[i];
            i++;
            scores++;
            maxScore = Math.max(scores, maxScore);
        }
    }
    return maxScore;
};

const tokens = [100];
bagOfTokensScore(tokens, 50);
