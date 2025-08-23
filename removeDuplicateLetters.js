/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
    let stack = [];
    let lastOccurence = {};
    let visited = new Set();

    for (let i = 0; i < s.length; i++) {
        lastOccurence[s[i]] = i;
    }

    for (let i = 0; i < s.length; i++) {
        if (!visited.has(s[i])) {
            while (
                stack.length &&
                stack.at(-1) > s[i] &&
                i < lastOccurence[stack.at(-1)]
            ) {
                visited.delete(stack.pop());
            }

            visited.add(s[i]);
            stack.push(s[i]);
        }
    }

    return stack.join('');
};

const s = 'cbacdcbc';
smallestSubsequence(s);
