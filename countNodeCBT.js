class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * Naive Solution
 * @param {*} root
 * @returns
 */
function countNodeCBTNaive(root) {
    if (!root) return 0;

    return 1 + countNodeCBT(root.left) + countNodeCBT(root.right);
}

/**
 * Efficient solution to calculate the height of complete binary tree...
 * @param {} root
 * @returns
 */
function countLeftNodeHeight(root) {
    let ld = 0;
    for (let curr = root; curr !== null; curr = curr.left) {
        ld++;
    }
    return ld;
}

function countRightNodeHeight(root) {
    let rd = 0;
    for (let curr = root; curr !== null; curr = curr.right) {
        rd++;
    }
    return rd;
}

let res = 0;
function countNodeCBT(root) {
    const lh = countLeftNodeHeight(root);
    const rh = countRightNodeHeight(root);
    if (lh === rh) {
        return (1 << lh) - 1;
    } else {
        const lNodes = countNodeCBT(root.left);
        const rNodes = countNodeCBT(root.right);
        return 1 + lNodes + rNodes;
    }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
root.left.left.left = new Node(80);
root.left.left.right = new Node(90);
root.left.right.left = new Node(100);
root.left.right.right = new Node(110);
root.right.left.left = new Node(120);
root.right.left.right = new Node(130);
root.right.right.left = new Node(140);
root.right.right.right = new Node(150);
root.left.left.left.left = new Node(160);
root.left.left.left.right = new Node(170);
root.left.left.right.left = new Node(180);
root.left.left.right.right = new Node(190);

console.log(countNodeCBT(root));
