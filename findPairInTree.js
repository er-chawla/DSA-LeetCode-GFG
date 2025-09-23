class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Method - 1
/**
 * Using InOrder traversal and apply TWO pointer approach to find pair
 * @param {*} root
 * @param {*} sum
 */
function findPairInTreeUsingInOrder(root, sum) {
    const arr = [];
    const inOrderTraversal = (root) => {
        let curr = root;
        while (curr) {
            if (!curr.left) {
                arr.push(curr.val);
                curr = curr.right;
            }
            let predecessor = curr.left;
            while (predecessor.right && predecessor.right !== curr) {
                predecessor = predecessor.right;
            }

            if (!predecessor.right) {
                predecessor.right = curr;
                curr = curr.left;
            } else {
                predecessor.right = null;
                arr.push(curr.val);
                curr = curr.right;
            }
        }
    };

    inOrderTraversal(root);

    let i = 0,
        j = arr.length - 1;

    while (i < j) {
        if (arr[i] + arr[j] === sum) {
            return [arr[i], arr[j]];
        } else if (arr[i] + arr[j] > sum) {
            j--;
        } else {
            i++;
        }
    }
}

/**
 *
 * @param {*} root
 * @param {*} sum
 */
function findPairInTree(root, sum) {
    let s = new Map();

    const isPair = (root, sum) => {
        if (root === null) return false;

        if (isPair(root.left, sum)) {
            return true;
        }
        if (s.has(sum - root.val)) {
            return true;
        }
        s.add(root.val);
        return isPair(root.right, sum);
    };
}

const root = new Node(10);
root.left = new Node(8);
root.right = new Node(20);
root.left.left = new Node(4);
root.left.right = new Node(9);
root.right.left = new Node(11);
root.right.right = new Node(30);
root.right.right.left = new Node(25);

const sum = 33;
console.log(findPairInTree(root, 33));
