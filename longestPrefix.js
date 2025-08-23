function longestPrefix(str) {
    let stack = [],
        aux = [];

    stack = str[0].split('').reverse();

    for (let i = 1; i < str.length; i++) {
        let st = str[i];
        for (let j = 0; j < st.length; j++) {
            if (stack.at(-1) === st[j]) {
                aux.push(stack.at(-1));
                stack.pop();
            } else {
                break;
            }
        }
        stack = aux.reverse();
        aux = [];
    }

    return stack.reverse().join('');
}

const str = ['dog', 'racecar', 'car'];

console.log(longestPrefix(str));
