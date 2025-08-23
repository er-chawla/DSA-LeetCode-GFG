// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let prevDummy = new ListNode(-1),
        pivotDummy = new ListNode(-1),
        nxtDummy = new ListNode(-1);

    let prev = prevDummy,
        pivot = pivotDummy,
        nxt = nxtDummy;

    let curr = head;
    while (curr) {
        let temp = curr.next;
        curr.next = null;
        if (curr.val < x) {
            prev.next = curr;
            prev = curr;
        } else if (curr.val > x) {
            nxt.next = curr;
            nxt = curr;
        } else {
            pivot.next = curr;
            pivot = curr;
        }
        curr = temp;
    }

    prev.next = pivotDummy.next;
    pivot.next = nxtDummy.next;
    return prevDummy.next;
};

const printLinkedList = (node) => {
    let str = '';
    let curr = node;
    while (curr.next !== null) {
        str += `${curr.val} -> `;
        curr = curr.next;
    }

    str += `${curr.val}`;

    return str;
};

/// 1 -> 4 -> 3 -> 2 -> 5 -> 2,   k= 3
const list = new ListNode(1);
const second = new ListNode(4);
const third = new ListNode(3);
const fourth = new ListNode(2);
const fifth = new ListNode(5);
const sixth = new ListNode(2);

list.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;

console.log(printLinkedList(list));
const res = partition(list, 3);
console.log(printLinkedList(res));
