/**
 * Infix to Postfix Implementation
 *
 *
 */

function infixToPostFix(str) {
    const prec = function (operator) {
        if (operator === '^') {
            return 3;
        } else if (operator === '*' || operator === '/') {
            return 2;
        } else if (operator === '+' || operator === '-') {
            return 1;
        }
        return -1;
    };
    const literals = str.split('');
    /// Step 1: Create stack..
    let st = [];
    let res = '';
    /// Step 2: process for every character of string..

    for (let literal of literals) {
        if (/[a-zA-Z0-9]/.test(literal)) {
            res += literal;
        } else if (literal === '(') {
            st.push(literal);
        } else if (literal === ')') {
            while (st.length && st.at(-1) !== '(') {
                res += st.pop();
            }
            st.pop();
        } else {
            while (
                st.length &&
                (prec(literal) < prec(st.at(-1)) ||
                    (prec(literal) === prec(st.at(-1)) && literal !== '^'))
            ) {
                res += st.pop();
            }

            st.push(literal);
        }
    }

    while (st.length) {
        res += st.pop();
    }
    return res;
}

let str = 'h^m^q^(7-4)';

console.log(infixToPostFix(str));
