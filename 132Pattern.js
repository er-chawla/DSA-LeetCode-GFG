function stack132Pattern(nums) {
    let num1 = Number.MIN_SAFE_INTEGER,
        num2 = Number.MIN_SAFE_INTEGER,
        num3 = Number.MIN_SAFE_INTEGER;
    let n = nums.length;

    let stack = [];
    for (let i = n - 1; i >= 0; i--) {
        if (num3 > nums[i] && num2 > nums[i]) {
            num1 = nums[i];
            return true;
        }

        while (stack.length && stack.at(-1) < nums[i]) {
            num3 = stack.pop();
            num2 = nums[i];
        }

        stack.push(nums[i]);
    }

    return false;
}

const nums = [-1, 3, 2, 0];

console.log(stack132Pattern(nums));
