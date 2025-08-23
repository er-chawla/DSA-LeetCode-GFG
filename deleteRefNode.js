class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function deleteRefNode(node) {
    const temp = node.next;
    node.val = temp.val;
    node.next = temp.next;
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

console.log(head);
deleteRefNode(third);

console.log(head);
