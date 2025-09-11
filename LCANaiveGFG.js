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

let root = new TreeNode(10);
root.left = new TreeNode(50);
root.right = new TreeNode(60);
root.left.left = new TreeNode(70);
root.left.right = new TreeNode(20);
root.left.left.left = new TreeNode(40);
root.left.right.left = new TreeNode(90);
root.left.right.right = new TreeNode(80);
root.left.right.left.left = new TreeNode(30);

console.log(findLCA(root, 30, 80));
