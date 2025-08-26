class Queue {
    constructor(cap) {
        this.arr = new Array(cap);
        this.front = 0;
        this.sz = 0;
    }

    enqueue(x) {
        if (this.sz === this.arr.length) {
            return 'Error: Queue is full';
        }
        let rear = (this.sz + this.front - 1) % this.arr.length;
        rear = (rear + 1) % this.arr.length;
        this.arr[rear] = x;
        this.sz++;
    }

    dequeue() {
        if (this.sz === 0) {
            return 'Error: Queue is Empty';
        }
        let res = this.arr[this.front];
        this.front = (this.front + 1) % this.arr.length;
        this.sz--;
        return res;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function levelOrderTraversal(root) {
    let qu = new Queue(10);
    qu.enqueue(root);
    while (qu.sz) {
        const curr = qu.dequeue();
        console.log(curr.val);

        if (curr.left) {
            qu.enqueue(curr.left);
        }
        if (curr.right) {
            qu.enqueue(curr.right);
        }
    }
}

///Method -- 1
function levelOrderTraversalPrintAtLine(root) {
    let res = [];
    let qu = new Queue(10);
    qu.enqueue(root);
    while (qu.sz) {
        const count = qu.sz;
        let ans = [];
        for (let i = 0; i < count; i++) {
            const curr = qu.dequeue();
            ans.push(curr.val);
            if (curr.left) {
                qu.enqueue(curr.left);
            }
            if (curr.right) {
                qu.enqueue(curr.right);
            }
        }

        res.push(ans);
    }
    return res;
}

///Method -2 TC O(n), AUX O(n)

var levelOrder = function (root) {
    let result = [];
    let qu = new Array();
    qu.push(root);

    while (qu.length) {
        let count = qu.length;
        let level = [];
        for (let i = 0; i < count; i++) {
            let curr = qu.shift();
            level.push(curr.val);
            if (curr.left) {
                qu.push(curr.left);
            }
            if (curr.right) {
                qu.push(curr.right);
            }
        }
        result.push(level);
    }

    return result.reverse();
};

// root = [3, 9, 20, null, null, 15, 7];
//     3
//   /   \
//  9    20
//      /  \
//     15   7
const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(levelOrder(root));
