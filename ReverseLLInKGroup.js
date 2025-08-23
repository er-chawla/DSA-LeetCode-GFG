class List {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }
}

function reverseInGroup(head, k) {
    let curr = head,
        firstPass = true,
        prevFirst = null;
    while (curr !== null) {
        let first = curr,
            prev = null,
            count = 0;
        while (curr !== null && count < k) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            count += 1;
        }
        if (firstPass) {
            head = prev;
            firstPass = false;
        } else {
            prevFirst.next = prev;
        }

        prevFirst = first;
    }

    return head;
}

const head = new List(10);
head.next = new List(20);
head.next.next = new List(30);
head.next.next.next = new List(40);
head.next.next.next.next = new List(50);
head.next.next.next.next.next = new List(60);
const res = reverseInGroup(head, 3);
console.log(res);
