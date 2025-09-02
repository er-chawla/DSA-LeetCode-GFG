class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function maxDiameterBTree(root) {
    let maxDia = 0;
    function diameterOfBinaryTree(root) {
        if (!root) return 0;
        let lh = diameterOfBinaryTree(root.left);
        let rh = diameterOfBinaryTree(root.right);

        maxDia = Math.max(maxDia, 1 + lh + rh);
        return Math.max(lh, rh) + 1;
    }
    diameterOfBinaryTree(root);
    return maxDia;
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(60);
root.left.left = new Node(30);
root.left.right = new Node(80);
root.left.right.right = new Node(90);
root.left.right.right.right = new Node(18);
root.left.left.left = new Node(50);
root.left.left.right = new Node(40);
root.left.left.left.left = new Node(60);

console.log(maxDiameterBTree(root));
