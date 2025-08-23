class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function segregateEvenAndOdd(head) {
    if (!head || !head.next) return head;
    let es = null,
        ee = null;
    let os = null,
        oe = null;

    let curr = head;
    while (curr) {
        let nextNode = curr.next;
        curr.next = null;
        if (curr.val % 2 !== 0) {
            if (!os) os = oe = curr;
            else {
                oe.next = curr;
                oe = curr;
            }
        } else {
            if (!es) es = ee = curr;
            else {
                ee.next = curr;
                ee = curr;
            }
        }
        curr = nextNode;
    }

    if (ee) {
        ee.next = os;
        return es;
    } else {
        return os;
    }
}

let head = new Node(17);
let second = new Node(15);
let third = new Node(8);
let fourth = new Node(12);
let fifth = new Node(5);
// let sixth = new Node(1);
// 17->15->8->12->5
head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

console.log(segregateEvenAndOdd(head));
