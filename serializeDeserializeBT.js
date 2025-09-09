class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function preOrderSerialize(root) {
    const res = [];
    const preOrderTraversal = (root, res) => {
        if (!root) {
            res.push(-1);
            return;
        }
        res.push(root.val);
        preOrderTraversal(root.left, res);
        preOrderTraversal(root.right, res);
    };
    preOrderTraversal(root, res);
    return res;
}

function serialize(root) {
    const arr = preOrderSerialize(root);
    return arr;
}

let pI = -1;
function deserialize(arr) {
    pI++;
    if (arr[pI] === -1) {
        return null;
    }
    const node = new Node(arr[pI]);

    node.left = deserialize(arr);
    node.right = deserialize(arr);

    return node;
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);

const arr = serialize(root);
console.log(serialize(root));

const node = deserialize(arr);
console.log(node);
