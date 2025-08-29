function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var isSameTree = function (p, q) {
    if ((!p && q) || (p && !q)) return false;

    let t1 = new Array(),
        t2 = new Array();

    t1.push(p);
    t2.push(q);

    while (t1.length && t2.length) {
        const sz1 = t1.length;
        const sz2 = t2.length;
        const curr1 = t1.shift();
        const curr2 = t2.shift();

        if (sz1 !== sz2) return false;

        if ((curr1 && !curr2) || (!curr1 && curr2)) return false;

        if (curr1.val !== curr2.val) return false;
        t1.push(curr1.left);
        t2.push(curr2.left);

        t1.push(curr1.right);
        t2.push(curr2.right);
    }

    return true;
};

const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

const q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

isSameTree(p, q);
