class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function morrisPreorderTraversal(root) {
    let curr = root;
    let res = [];

    while (curr) {
        if (!curr.left) {
            res.push(curr.val);
            curr = curr.right;
        } else {
            let predecessor = curr.left;
            while (predecessor.right && predecessor.right !== curr) {
                predecessor = predecessor.right;
            }
            if (!predecessor.right) {
                res.push(curr.val);
                predecessor.right = curr;
                curr = curr.left;
            } else {
                predecessor.right = null;
                curr = curr.right;
            }
        }
    }
    return res;
}

//         1
//       /   \
//     2      3
//   /   \      \
//  4    5       8
//     /   \     /
//    6     7   9

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(6);
root.left.right.right = new TreeNode(7);
root.right.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
console.log(morrisPreorderTraversal(root));
