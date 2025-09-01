class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function maximumWidthBinaryTree(root) {
    if (!root) return 0;
    let res = 0;
    let qu = new Array();
    qu.push(root);

    while (qu.length) {
        const count = qu.length;
        res = Math.max(res, count);
        for (let i = 0; i < count; i++) {
            let curr = qu.shift();
            if (curr.left) {
                qu.push(curr.left);
            }

            if (curr.right) {
                qu.push(curr.right);
            }
        }
    }

    return res;
}

/**
 * 
  IP: 
//        10
//       /  \
//      20  30
//     /   /  \
//    40  50  60
//   /
//  80

 */

/**
 * Output : 3
 */
const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.left.left = new Node(80);
root.right.left = new Node(50);
root.right.right = new Node(60);

console.log(maximumWidthBinaryTree(root));
