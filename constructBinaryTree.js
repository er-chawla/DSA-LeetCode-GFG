import { levelOrder } from './BFS.js';

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export class Solution {
    /**
     * Construct Binary tree from inOrder to preOrder.
     */

    pIdx = 0;
    constructorBinaryTree(inOrder, preOrder, is, ie) {
        let rootElm = this.search(inOrder, preOrder[pIdx], is, ie);
        if (rootElm === -1) {
            this.pIdx--;
            return null;
        }
        let node = new Node(inOrder[rootElm]);

        this.pIdx++;
        node.left = this.constructorBinaryTree(
            inOrder,
            preOrder,
            is,
            rootElm - 1
        );
        this.pIdx++;
        node.right = this.constructorBinaryTree(
            inOrder,
            preOrder,
            rootElm + 1,
            ie
        );

        return node;
    }

    search(arr, x, is, ie) {
        for (let i = is; i <= ie; i++) {
            if (arr[i] === x) {
                return i;
            }
        }
        return -1;
    }
}

var buildTree = function (preorder, inorder) {
    let pIdx = 0;
    let iMap = new Map();

    const buildMap = () => {
        for (let i = 0; i < inorder.length; i++) {
            iMap.set(inorder[i], i);
        }
    };

    const cTree = (iS, iE) => {
        if (iS > iE) return null;

        const root = new TreeNode(preorder[pIdx]);
        pIdx++;

        if (iS === iE) return root;

        const i = iMap.get(root.val);

        root.left = cTree(iS, i - 1);
        root.right = cTree(i + 1, iE);

        return root;
    };

    buildMap();
    return cTree(0, preorder.length - 1);
};

// const inOrder = [40, 20, 50, 10, 30, 80, 70, 90];
// const preOrder = [10, 20, 40, 50, 30, 70, 80, 90];

const preorder = [3, 9, 20, 15, 7],
    inorder = [9, 3, 15, 20, 7];

buildTree(preorder, inorder);

// const binaryTree = new Solution().constructorBinaryTree(
//     inOrder,
//     preOrder,
//     0,
//     inOrder.length - 1
// );

// console.log(levelOrder(binaryTree));
