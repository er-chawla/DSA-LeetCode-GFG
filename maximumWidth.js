class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var widthOfBinaryTree = function (root) {
    let qu = new Array();
    let res = 0;
    qu.push({ curr: root, parentIdx: 0 });
    while (qu.length) {
        let count = qu.length;
        const firstIdx = qu[0].parentIdx;
        const lastIdx = qu[count - 1].parentIdx;

        const width = lastIdx - firstIdx + 1;
        res = Math.max(res, width);

        for (let i = 0; i < count; i++) {
            let { curr, parentIdx } = qu.shift();

            if (curr.left) {
                qu.push({ curr: curr.left, parentIdx: 2 * parentIdx + 1 });
            }
            if (curr.right) {
                qu.push({ curr: curr.right, parentIdx: 2 * parentIdx + 2 });
            }
        }
    }

    return res;
};

const root = new Node(1);
root.left = new Node(3);
root.right = new Node(2);
// root.left.left = new Node(5);
root.left.right = new Node(3);
root.right.right = new Node(9);

console.log(widthOfBinaryTree(root));
