function basicCalculator(s) {
    let prec = (op) => {
        if (op === '*' || op === '/') {
            return 2;
        } else if (op === '+' || op === '-') {
            return 1;
        } else {
            return -1;
        }
    };

    let castOperand = (op, operand) => {
        if (op === '-' && operand < 0) {
            return ['+', Math.abs(operand)];
        } else if ((op === '+' && operand < 0) || (op === '-' && operand > 0)) {
            return ['-', Math.abs(operand)];
        } else {
            return [op, operand];
        }
    };

    let exec = () => {
        let op = st.pop();
        let i = 2;
        let operands = [];
        while (res.at(-1) !== '>' && i > 0) {
            const operand = res.pop();
            operands.push(operand);
            i--;
        }

        if (res.at(-1) === '>') {
            res.pop();
        }

        let result;
        if (operands.length === 2) {
            const first = operands.pop();
            let second = operands.pop();
            [op, second] = castOperand(op, second);
            const str = `${first}${op}${second}`;
            result = eval(str);
        } else if (operands.length === 1) {
            const operand = operands.pop();
            result = eval(`${op}${operand}`);
        }

        res.push(result);
    };
    let st = [];
    let res = [];

    for (let i = 0; i < s.length; i++) {
        if (ch === ' ') {
            continue;
        } else if (/[0-9]/.test(+ch)) {
            let negative = false;
            // Check for negative sign before number
            if (
                i > 0 &&
                s[i - 1] === '-' &&
                (i === 1 || /[\(\+\-\*\/]/.test(s[i - 2]))
            ) {
                negative = true;
            }
            while (i < s.length && /[0-9]/.test(s[i])) {
                num = num * 10 + Number(s[i]);
                i++;
            }
            res.push(negative ? -num : num);
            if (negative) {
                st.pop();
            }
            //res.push(+ch);
        } else if (ch === '(') {
            st.push(ch);
            res.push('>');
        } else if (ch === ')') {
            while (st.length && st.at(-1) !== '(') {
                exec();
            }
            st.pop();
            const result = res.pop();
            if (res.at(-1) === '>') {
                res.pop();
            }
            res.push(result);
        } else {
            while (st.length && prec(ch) <= prec(st.at(-1))) {
                exec();
            }
            st.push(ch);
        }
    }

    while (st.length) {
        exec();
    }

    return +res.join('');
}

const s = '-2+ 1';

console.log(basicCalculator(s));
