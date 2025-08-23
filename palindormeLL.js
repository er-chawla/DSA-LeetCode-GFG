class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function palindromeLL(head) {
    let slow = head,
        fast = head,
        slowPrev = null;

    while (fast !== null && fast.next !== null) {
        slowPrev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    fast = slow;
    slowPrev.next = null;

    let prev = null;
    while (fast !== null) {
        const temp = fast.next;
        fast.next = prev;
        prev = fast;
        fast = temp;
    }

    slow = head;
    while (slow !== null && prev !== null) {
        if (slow.val !== prev.val) {
            return false;
        }
        slow = slow.next;
        prev = prev.next;
    }
    if (slow !== null || fast !== null) return false;

    return true;
}

let head = new Node(1);
let second = new Node(2);
let third = new Node(2);
let fourth = new Node(2);
let fifth = new Node(1);
// let sixth = new Node(1);
// 1->2->1->1->2->1
head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
// fifth.next = sixth;

/// 1->2->1

console.log(palindromeLL(head));
