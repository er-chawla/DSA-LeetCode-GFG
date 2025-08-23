function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
    let values = [];
    let curr = head;
    while (curr) {
        values.push(curr.val);
        curr = curr.next;
    }

    let stack = [];
    let nextGreater = new Array(values.length).fill(0);

    for (let i = 0; i < values.length; i++) {
        while (stack.length && stack.at(-1) < values[i]) {
            const stackTop = stack.pop();
            nextGreater[stackTop] = values[i];
        }
        stack.push(i);
    }
    return nextGreater;
};

const head = new ListNode(2);
head.next = new ListNode(1);
head.next.next = new ListNode(5);

nextLargerNodes(head);
