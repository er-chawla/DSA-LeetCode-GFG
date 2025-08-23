class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    addTwoLists(head1, head2) {
        // code here
        const reverse = (node) => {
            let curr = node,
                prev = null;
            while (curr) {
                let temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }
            return prev;
        };
        let rem = 0;
        const addNode = (total, curr) => {
            curr;
            const q = Math.floor(total % 10);
            rem = Math.floor(total / 10);
            const node = new Node(q);
            curr.next = node;
            curr = curr.next;
            return curr;
        };

        let first = reverse(head1);
        let second = reverse(head2);

        let dummy = new Node(-1);
        let curr = dummy;
        while (first && second) {
            const total = rem + first.data + second.data;
            total;
            curr = addNode(total, curr);
            first = first.next;
            second = second.next;
            dummy;
        }

        if (first) {
            const total = first.data + rem;
            curr = addNode(total, curr);
            first = first.next;
        }

        if (second) {
            const total = second.data + rem;
            curr = addNode(total, curr);
            second = second.next;
        }

        if (rem) {
            addNode(rem, curr);
        }

        const res = reverse(dummy.next);

        res;
        return res;
    }
}

//4 -> 5
const list1 = new Node(4);
const lSecond = new Node(5);

list1.next = lSecond;

// 3 -> 4 -> 5

const list2 = new Node(3);
const l2Second = new Node(4);
const l2Third = new Node(5);

list2.next = l2Second;
l2Second.next = l2Third;

const printLinkedList = (node) => {
    let str = '';
    let curr = node;
    while (curr.next !== null) {
        str += `${curr.data} -> `;
        curr = curr.next;
    }

    str += `${curr.data}`;

    return str;
};

const sl = new Solution();
const res = sl.addTwoLists(list1, list2);

console.log(printLinkedList(res));
