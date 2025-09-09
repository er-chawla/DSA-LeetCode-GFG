/**
 * LeetCode - 114
 */

/**
 *
 * Definition for a binary tree node.
 *
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    let dummyNode = new TreeNode(null);
    let curr = dummyNode;
    var preOrderTraversal = (root) => {
        if (!root) return;
        curr.right = new TreeNode(root.val);
        curr = curr.right;
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
    };
    preOrderTraversal(root);
    return dummyNode.right;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

console.log(flatten(root));
