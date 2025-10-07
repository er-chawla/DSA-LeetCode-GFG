class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function checkIsBSTMorris(root) {
    const arr = [];
    const inOrderTraversal = (root) => {
        let curr = root;
        let prev = null;
        while (curr) {
            if (curr.val < prev) {
                return false;
            }

            if (!curr.left) {
                prev = curr.val;
                curr = curr.right;
            } else {
                let predecessor = curr.left;
                while (predecessor.right && predecessor.right !== curr) {
                    predecessor = predecessor.right;
                }

                if (predecessor.right === null) {
                    predecessor.right = curr;
                    curr = curr.left;
                } else {
                    predecessor.right = null;
                    prev = curr.val;
                    curr = curr.right;
                }
            }
        }
        return true;
    };

    return inOrderTraversal(root);
}

function checkIsBST(
    root,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY
) {
    if (!root) return true;

    return (
        root.val > min &&
        root.val < max &&
        checkIsBST(root.left, min, root.val) &&
        checkIsBST(root.right, root.val, max)
    );
}

//     10
//   /    \
//  8      20
//        /   \
//      7    24

const root = new Node(10);
root.left = new Node(8);
root.right = new Node(20);
root.right.left = new Node(12);
root.right.right = new Node(24);

console.log(checkIsBSTMorris(root));
