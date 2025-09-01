class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/***
 * Iterative Solution..
 */
function leftViewBinaryTree(root) {
    let qu = new Array();
    qu.push(root);
    while (qu.length) {
        let count = qu.length;
        for (let i = 0; i < count; i++) {
            const curr = qu.shift();
            if (i === 0) {
                console.log(curr.val);
            }
            if (curr.left) {
                qu.push(curr.left);
            }
            if (curr.right) {
                qu.push(curr.right);
            }
        }
    }
}

let maxLevel = 0;
function leftViewBinaryTreeRec(root, level) {
    if (!root) return;
    if (level > maxLevel) {
        maxLevel = level;
        console.log(root.val);
    }
    leftViewBinaryTreeRec(root.left, level + 1);
    leftViewBinaryTreeRec(root.right, level + 1);
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.right.left = new Node(60);
root.left.left.right = new Node(80);
root.right.left.left = new Node(90);
root.right.left.right = new Node(100);

leftViewBinaryTreeRec(root, 1);
