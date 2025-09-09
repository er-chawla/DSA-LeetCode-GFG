class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function morrisInOrderTraversal(root) {
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
                predecessor.right = curr; // Created Thread with curr node..
                curr = curr.left;
            } else {
                predecessor.right = null;
                res.push(curr.val);
                curr = curr.right;
            }
        }
    }
    return res;
}

//     1
//   /   \
// 2      3
//     /     \
//   4        5

/// [2, 1, 4, 3, 5]
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

const result = morrisInOrderTraversal(root);
console.log(result);
