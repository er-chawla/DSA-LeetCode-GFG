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
 * Method - 2 Efficient Solution :- O(n)
 */

function isBalancedTreeEfficient(root) {
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

/**
 * Method - 3 Further Effective Solution instead of calculate two parameter height & isBalanced
 * We can determine if subTree/ is not balance we will return -1 it mean its not balanced
 *
 *
 * TC- O(n)
 * AUX - O(h)
 * Where h mean the height of tree which level of node present in the stack..
 */

function isBalancedTree(root) {
    const checkTree = (root) => {
        if (!root) return 0;

        const lB = checkTree(root.left);
        const rB = checkTree(root.right);

        return lB >= 0 && rB >= 0 && Math.abs(lB - rB) <= 1
            ? Math.max(lB, rB) + 1
            : -1;
    };

    return checkTree(root) >= 0 ? true : false;
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
