function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

function sumNumbers(root) {
    const st = [];
    const sumRootToLeaf = (root, path = []) => {
        if (!root.left && !root.right) {
            path = [...path, root.val];
            return parseInt(path.join(''));
        }
        let lN = 0,
            rN = 0;
        if (root.left) {
            lN = sumRootToLeaf(root.left, [...path, root.val]);
        }
        if (root.right) {
            rN = sumRootToLeaf(root.right, [...path, root.val]);
        }
        return lN + rN;
    };

    return sumRootToLeaf(root);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log(sumNumbers(root));
