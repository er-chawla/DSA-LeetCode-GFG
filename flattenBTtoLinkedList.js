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
    let curr = root;
    while (curr) {
        if (curr.left) {
            let predecessor = curr.left;

            while (predecessor.right && predecessor.right !== curr) {
                predecessor = predecessor.right;
            }

            predecessor.right = curr.right;
            curr.right = curr.left;
            curr.left = null;
        }
    }
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

console.log(flatten(root));
