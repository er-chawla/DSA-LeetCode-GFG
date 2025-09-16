class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(inorder, postorder) {
    // code here
    const iOMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        iOMap.set(inorder[i], i);
    }

    let index = postorder.length - 1;
    const binaryTree = (iO, pO, iS, iE) => {
        if (iS > iE) {
            return null;
        }
        const root = new Node(pO[index]);
        index--;

        if (iS === iE) return root;

        const idx = iOMap.get(root.data);

        root.right = binaryTree(iO, pO, idx + 1, iE);
        root.left = binaryTree(iO, pO, iS, idx - 1);

        return root;
    };
    const root = binaryTree(inorder, postorder, 0, inorder.length - 1);
    return root;
}

const iO = [4, 8, 2, 5, 1, 6, 3, 7],
    pO = [8, 4, 5, 2, 6, 7, 3, 1];

console.log(buildTree(iO, pO));
