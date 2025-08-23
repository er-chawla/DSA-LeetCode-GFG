class Node {
    constructor() {
        this.val = 0;
        this.next = null;
        this.random = null;
    }
    setter(val) {
        this.val = val;
    }
}

function cloneRandomPointer() {
    let curr = head;
    while (curr) {
        let next = curr.next;
        let node = new Node();
        node.setter(curr.val);
        curr.next = node;
        curr.next.next = next;
        curr = next;
    }

    head;

    for (let curr = head; curr != null; curr = curr.next.next) {
        curr.next.random = curr.random !== null ? curr.random.next : null;
    }

    let original = head,
        copy = head.next;

    let temp = copy;
    while (original & copy) {
        original.next = original.next ? original.next.next : original.next;

        copy.next = copy.next ? copy.next.next : copy.next;

        original = original.next;
        copy = copy.next;
    }

    return temp;
}

let head = new Node();
head.setter(10);
head.next = new Node();
head.next.setter(5);
head.next.next = new Node();
head.next.next.setter(20);
head.next.next.next = new Node();
head.next.next.next.setter(15);
head.next.next.next.next = new Node();
head.next.next.next.next.setter(20);
head.next.next.next.next.next = null;

head.random = head.next.next;
head.next.random = head.next.next.next;
head.next.next.random = head;
head.next.next.next.random = head.next.next;
head.next.next.next.next.random = head.next.next.next;

console.log(cloneRandomPointer(head));
