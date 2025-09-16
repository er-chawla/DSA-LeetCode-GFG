class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    count = 0;
    countSubtreesWithSumX(root, x) {
        // code here
        if (!root) return 0;

        const l = this.countSubtreesWithSumX(root.left, x);
        const r = this.countSubtreesWithSumX(root.right, x);

        if (l + r + root.val === x) {
            this.count++;
        }
        return l + r + root.val;
    }

    countSubtrees(root, x) {
        this.countSubtreesWithSumX(root, x);
        return this.count;
    }
}

let root = new TreeNode(5);
root.left = new TreeNode(-10);
root.right = new TreeNode(3);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(8);
root.right.left = new TreeNode(-4);
root.right.right = new TreeNode(7);
const x = 7;
const obj = new Solution();
const res = obj.countSubtrees(root, x);

console.log(res);
