class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function verticalSum(root) {
    const mp = new Map();

    const verticalSumInTree = (root, hd = 0) => {
        if (!root) {
            return;
        }

        verticalSumInTree(root.left, hd - 1);
        mp.set(hd, (mp.get(hd) || 0) + root.val);
        verticalSumInTree(root.right, hd + 1);
    };
    verticalSumInTree(root);
    let str = ' ';
    for (const [key, val] of mp.entries()) {
        str += val + ' ';
    }
    console.log(str);
}

const root = new Node(10);
root.left = new Node(15);
root.right = new Node(25);
root.left.left = new Node(35);
root.left.right = new Node(20);
root.left.left.left = new Node(40);
root.left.right.right = new Node(75);
root.left.right.right.right = new Node(80);

verticalSum(root);
