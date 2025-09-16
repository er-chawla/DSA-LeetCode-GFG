class TreeNode {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

/// Naive approach

let maxDiffData = Number.MIN_SAFE_INTEGER;
function maxDiff(root) {
    maxDiffNode(root);
    return maxDiffData;
}

function maxDiffNode(root) {
    if (!root) return;

    maxDiffUtil(root, root.left);
    maxDiffUtil(root, root.right);

    maxDiffNode(root.left);
    maxDiffNode(root.right);
}

function maxDiffUtil(root, child) {
    if (!child) return;
    maxDiffData = Math.max(maxDiffData, root.data - child.data);
    maxDiffUtil(root, child.left);
    maxDiffUtil(root, child.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(7);

console.log(maxDiff(root));
