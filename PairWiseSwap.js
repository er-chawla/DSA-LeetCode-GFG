class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function pairWiseSwap(head) {
    if (!head || !head.next) {
        return head;
    }

    let first = head,
        second = head.next,
        third = head.next.next,
        prev = null;

    while (first && second) {
        third = second.next;
        second.next = first;
        first.next = third;
        if (prev) {
            prev.next = second;
        } else {
            head = second;
        }

        prev = first;
        first = third;
        if (third) {
            second = third.next;
        } else {
            second = null;
        }
    }
    return head;
}

const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);
const sixth = new Node(6);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;

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

console.log(printLinkedList(head));
const res = pairWiseSwap(head);
console.log(printLinkedList(res));
