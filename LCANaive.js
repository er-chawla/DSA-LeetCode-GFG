class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function determinePath(root, node) {
    let result = [];
    function findPath(root, node, path = []) {
        if (!root) return;
        if (root.val === node) {
            result = [...path, root.val];
            return;
        }
        findPath(root.left, node, [...path, root.val]);
        findPath(root.right, node, [...path, root.val]);
    }
    findPath(root, node);
    return result;
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

const path1 = determinePath(root, 50);
const path2 = determinePath(root, 20);

let i = 0,
    j = 0;

let res = -1;
while (true) {
    if (path1[i] !== path2[j]) {
        break;
    }
    res = i;
    i++;
    j++;
}
console.log(path1[res]);
