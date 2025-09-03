class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function createParentMapping(root, leaf, nodeToParent) {
    let leafNode = null;
    let qu = new Array();
    qu.push(root);

    while (qu.length) {
        const node = qu.shift();
        if (node.val === leaf) {
            leafNode = node;
        }
        if (node.left) {
            nodeToParent.set(node.left, node);
            qu.push(node.left);
        }
        if (node.right) {
            nodeToParent.set(node.right, node);
            qu.push(node.right);
        }
    }
    return leafNode;
}

function burnBinaryTree(root, nodeToParent) {
    let qu = new Array();
    let res = 0;
    let visited = new Map();

    qu.push(root);

    while (qu.length) {
        const size = qu.length;
        let hasChanged = false;
        for (let i = 0; i < size; i++) {
            const node = qu.shift();

            if (node.left && !visited.has(node.left)) {
                qu.push(node.left);
                hasChanged = true;
            }

            if (node.right && !visited.has(node.right)) {
                qu.push(node.right);
                hasChanged = true;
            }

            const parent = nodeToParent.get(node);
            if (parent && !visited.has(parent)) {
                qu.push(parent);
                hasChanged = true;
            }
            visited.set(node, 1);
        }

        if (hasChanged) {
            res++;
        }
    }

    return res;
}

function minTime(root, leaf) {
    //1. Create Node mapping..
    const nodeToParent = new Map();
    const leafNode = createParentMapping(root, leaf, nodeToParent);
    //2. find the target node.
    if (!leafNode) {
        return -1;
    }
    //3. burn the tree in mean time..
    return burnBinaryTree(leafNode, nodeToParent);
}

// const root = new Node(10);
// root.left = new Node(20);
// root.right = new Node(30);
// root.left.left = new Node(40);
// root.left.right = new Node(50);
// root.right.right = new Node(60);

// 10
//   \
//    20
//      \
//       30
//         \
//          40
//            \
//             50
//               \
//                60

const root = new Node(10);
root.right = new Node(20);
root.right.right = new Node(30);
root.right.right.right = new Node(40);
root.right.right.right.right = new Node(50);
root.right.right.right.right.right = new Node(60);

const leaf = 60;
console.log(minTime(root, leaf));
