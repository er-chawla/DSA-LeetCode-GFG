class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function findPath(root, path, x) {
    if (!root) return false;
    path.push(root.val);

    if (root.val === x) {
        return true;
    }

    if (
        (root.left && findPath(root.left, path, x)) ||
        (root.right && findPath(root.right, path, x))
    ) {
        return true;
    }

    path.pop();

    return false;
}

function findLCA(root, n1, n2) {
    let p1 = [],
        p2 = [];
    if (!findPath(root, p1, n1) || !findPath(root, p2, n2)) {
        return false;
    }

    for (let i = 0; i < p1.length && p2.length; i++) {
        if (p1[i] !== p2[i]) {
            return p1[i - 1];
        }
    }
    return p1.length < p2.length ? p1[p1.length - 1] : p2[p2.length - 1];
}

//           10
//         /    \
//       50    60
//     /    \
//    70      20
//   /      /    \
//  40    90     80
//        /
//       30

const root = new TreeNode(10);
root.left = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(9);
root.left.left.left = new TreeNode(1);
root.left.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(7);
root.left.left.right.left = new TreeNode(3);
root.left.left.right.right = new TreeNode(5);
root.left.right.left.right = new TreeNode(8);

console.log(findLCA(root, 6, 2));
