class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function twoNodeSwapped(root) {
    const inOrderTraversal = (root) => {
        const arr = [];
        const inOrder = (root, arr) => {
            if (!root) return;
            inOrder(root.left, arr);
            arr.push(root.val);
            inOrder(root.right, arr);
        };

        inOrder(root, arr);

        return arr;
    };

    const arr = inOrderTraversal(root);

    let first = -1,
        second = -1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1] && first === -1) {
            first = arr[i - 1];
        }

        if (arr[i] < arr[i - 1]) {
            second = arr[i];
        }
    }

    console.log(first, second);
}

const root = new Node(60);
root.left = new Node(8);
root.right = new Node(80);
root.left.left = new Node(4);
root.left.right = new Node(10);
root.right.left = new Node(20);
root.right.right = new Node(100);

twoNodeSwapped(root);
