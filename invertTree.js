function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var invertTree = function (root) {
    if (!root) return null;

    const right = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(right);
    return root;
};

//        1
//      /   \
//     2     5
//   /  \     \
//  3   4      6

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

console.log(invertTree(root));
