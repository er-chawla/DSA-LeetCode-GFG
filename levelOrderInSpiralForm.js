class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function findSpiral(root) {
    let lvl = 0;
    let st = [];
    let qu = new Array();
    let res = [];

    const addInStack = (node) => {
        if (lvl % 2 !== 0) {
            st.push(node.data);
        }
    };

    qu.push(root);
    st.push(root.data);
    while (qu.length) {
        while (st.length) {
            if (lvl % 2 === 0) {
                res.push(st.pop());
            }
        }
        const count = qu.length;
        for (let i = 0; i < count; i++) {
            const curr = qu.shift();
            if (lvl % 2 !== 0) {
                res.push(curr.data);
            }

            if (curr.left) {
                qu.push(curr.left);
                addInStack(curr.left);
            }

            if (curr.right) {
                qu.push(curr.right);
                addInStack(curr.right);
            }
        }

        lvl++;
    }

    return res;
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(60);

const result = findSpiral(root);
console.log(result);
