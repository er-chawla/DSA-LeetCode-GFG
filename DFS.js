class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function inOrder(root) {
    if (root !== null) {
        inOrder(root.left);
        console.log(root.val);
        inOrder(root.right);
    }
}

function preOrder(root) {
    if (root !== null) {
        console.log(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
}

function postOrder(root) {
    if (root !== null) {
        postOrder(root.left);
        postOrder(root.right);
        console.log(root.val);
    }
}
//       10
//     /    \
//    20    30
//  /      /  \
// 40     50  60

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.right.left = new Node(50);
root.right.right = new Node(60);

//40 20 10 50 30 60
// inOrder(root);

//10 20 40 30 50 60
// preOrder(root);

//40 20 50 60 30 10
postOrder(root);
