class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function inOrder(root) {
    let res = [];
    const inOrderTraversal = (root, res) => {
        if (!root) return;
        inOrderTraversal(root.left, res);
        res.push(root.val);
        inOrderTraversal(root.right, res);
    };
    inOrderTraversal(root, res);
    return res;
}

function preOrder(root) {
    let res = [];
    const preOrderTraversal = (root, res) => {
        if (!root) return;
        res.push(root.val);
        preOrderTraversal(root.left, res);
        preOrderTraversal(root.right, res);
    };

    preOrderTraversal(root, res);
    return res;
}

function serializeBT(root) {
    return [...inOrder(root), -1, ...preOrder(root)];
}

function deserializeBT(arr) {
    let inOrder = [];
    let preOrder = [];
    let i = 0;
    for (; arr[i] !== -1; i++) {
        inOrder.push(arr[i]);
    }
    for (i = i + 1; i < arr.length; i++) {
        preOrder.push(arr[i]);
    }
    return constructBT(inOrder, preOrder, 0, inOrder.length - 1, 0);
}

function constructBT(inOrder, preOrder, sI, eI, pI) {
    if (sI > eI) return null;
    let root = new Node(preOrder[pI]);
    pI++;

    if (sI === eI) return root;

    let i = sI;

    while (i <= eI) {
        if (inOrder[i] === root.val) {
            break;
        }
        i++;
    }
    root.left = constructBT(inOrder, preOrder, sI, i - 1, pI);
    root.right = constructBT(inOrder, preOrder, i + 1, eI, pI);

    return root;
}

const root = new Node(10);
root.left = new Node(20);

const serialize = serializeBT(root);

/// serialize Binary Tree..
console.log(serialize);

const deserialize = deserializeBT(serialize);

console.log(deserialize);
