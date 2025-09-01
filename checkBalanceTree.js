class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * Naive Solution - O(n^2)
 */

function height(node) {
    if (!node) return 0;
    return Math.max(height(node.left), height(node.right)) + 1;
}

function isBalancedTreeNaive(root) {
    if (!root || (!root.left && !root.right)) return true;

    const leftTreeHeight = height(root.left);
    const rightTreeHeight = height(root.right);
    const isBalanced = Math.abs(leftTreeHeight - rightTreeHeight);
    return (
        isBalanced <= 1 &&
        isBalancedTree(root.left) &&
        isBalancedTree(root.right)
    );
}

/**
 * Efficient Solution :- O(n)
 */

function isBalancedTree(root) {
    const checkBalanced = (root) => {
        if (!root) return { h: 0, isBalanced: true };

        const lB = checkBalanced(root.left);
        const rB = checkBalanced(root.right);

        const isBalanced =
            lB.isBalanced && rB.isBalanced && Math.abs(lB.h - rB.h) <= 1;

        return {
            h: Math.max(lB.h, rB.h) + 1,
            isBalanced,
        };
    };
    return checkBalanced(root).isBalanced;
}

//Example for balanced tree..
//    18
//   /  \
//  4   20
//     /  \
//    13  70
const root = new Node(18);
root.left = new Node(4);
root.right = new Node(20);
root.right.left = new Node(13);
root.right.right = new Node(70);

/// Example for unbalanced tree...
//       3
//     /   \
//    4     8
//   / \     \
//  5   9     7
//           /
//          6

// const root = new Node(3);
// root.left = new Node(4);
// root.right = new Node(8);
// root.left.left = new Node(5);
// root.left.right = new Node(9);
// root.right.right = new Node(7);
// root.right.right.left = new Node(6);

console.log(isBalancedTree(root));
