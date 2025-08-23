class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    reverseKGroup(head, k) {
        // code here
        let curr = head,
            firstPass = true,
            prevFirst = null;
        while (curr) {
            let first = curr,
                prev = null,
                count = 0;
            while (curr && count < k) {
                let temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
                count++;
            }

            if (firstPass) {
                head = prev;
                prevFirst = first;
                firstPass = false;
            } else {
                prevFirst.next = prev;
                prevFirst = first;
            }
        }

        return head;
    }
}

const list = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);
const sixth = new Node(6);
const seventh = new Node(7);
const eight = new Node(8);

list.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
sixth.next = seventh;
seventh.next = eight;

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
    let end = null;

    for (let curr = head; curr !== null; curr = curr.next) {
        end = curr;
    }

    let curr = head;
    let dummy = new ListNode(-1);
    let pivotDummy = new ListNode(-1);
    let first = dummy,
        last = end,
        pivot = pivotDummy;
    while (curr !== end) {
        if (curr.val < x) {
            const temp = curr.next;
            curr.next = null;
            first.next = curr;
            first = curr;
            curr = temp;
        } else if (curr.val > x) {
            const temp = curr.next;
            curr.next = null;
            last.next = curr;
            last = curr;
            curr = temp;
        } else {
            const temp = curr.next;
            pivot.next = curr;
            curr.next = null;
            pivot.next = pivot;
            pivot = curr;
            curr = temp;
        }
    }

    // for (let curr = head; curr !== null; curr = curr.next) {
    //     curr;
    //     if (curr.val < x) {
    //         prev.next = curr;
    //         prev = prev.next;

    //     } else if (curr.val > x) {
    //         nxt.next = curr;
    //         nxt = nxt.next;
    //     } else {
    //         pivot.next = curr;
    //         pivot = pivot.next;
    //     }
    // }

    // return prevDummy.next;
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
console.log(partition(res));

console.log(printLinkedList(list));

const sl = new Solution();
const res = sl.reverseKGroup(list, 3);
console.log(printLinkedList(res));
