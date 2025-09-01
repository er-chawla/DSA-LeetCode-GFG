class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function childSumBinaryTree(root) {
    if (!root || (!root.left && !root.right)) return true;

    return (
        root.val === root.left.val + root.right.val &&
        childSumBinaryTree(root.left) &&
        childSumBinaryTree(root.right)
    );
}

const root = new Node(3);
root.left = new Node(1);
root.right = new Node(2);
root.right.left = new Node(1);
root.right.right = new Node(2);

// const root = new Node(20);
// root.left = new Node(8);
// root.right = new Node(12);
// root.left.left = new Node(3);
// root.left.right = new Node(5);

console.log(childSumBinaryTree(root));
