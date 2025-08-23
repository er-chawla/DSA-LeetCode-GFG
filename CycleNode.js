class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function hasCycleNaive(head) {
    let slow = head,
        fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === null || fast.next === null) {
            return;
        }
        if (slow === fast) {
            break;
        }
    }

    fast = head;

    while (slow !== fast) {
        if (slow.next === fast.next) {
            break;
        }
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = null;
}

// Create nodes
let head = new Node(1);
let second = new Node(2);
let third = new Node(1);
let fourth = new Node(1);
let fifth = new Node(2);
let sixth = new Node(1);

// Link nodes: 1 → 2 → 3 → 4 → 5
head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;

// Create a cycle: point 5 → 3
// fifth.next = third;

// Structure now: 1 → 2 → 3 → 4 → 5
//                          ↑       ↓
//                          ← ← ← ←/ Create cycle
console.log(head);
console.log(hasCycleNaive(head)); // true
console.log(head);
