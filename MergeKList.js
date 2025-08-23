/**
 * @param {Node[]} arr
 * @returns {Node}
 */

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var mergeKLists = function (lists) {
    let mergeList = new ListNode(-1);
    mergeList.next = lists[0];
    let currList = mergeList.next;
    for (let i = 1; i < lists.length; i++) {
        let dummy = new ListNode(-1);
        let curr = dummy;
        let list = lists[i];
        while (currList && list) {
            if (currList.data < list.data) {
                curr.next = currList;
                currList = currList.next;
            } else {
                curr.next = list;
                list = list.next;
            }

            curr = curr.next;
        }
        if (currList !== null) {
            curr.next = currList;
        }

        if (list !== null) {
            curr.next = list;
        }

        currList = dummy.next;
    }

    return currList;
};

//First List...
//1 -> 4 -> 5
const list1 = new ListNode(1);
const lSecond = new ListNode(4);
const lThird = new ListNode(5);
list1.next = lSecond;
lSecond.next = lThird;

//Second List...
// 1 ->  3 -> 4

const list2 = new ListNode(1);
const l2Second = new ListNode(3);
const l2Third = new ListNode(4);
// const l2Fourth = new Node(5);
// const l2Fifth = new Node(6);
// const l2Sixth = new Node(8);
// const l2Seven = new Node(10);
list2.next = l2Second;
l2Second.next = l2Third;
// l2Third.next = l2Fourth;
// l2Fourth.next = l2Fifth;
// l2Fifth.next = l2Sixth;
// l2Sixth.next = l2Seven;

// Third List...
//2 -> 6
const list3 = new ListNode(2);
const l3Second = new ListNode(6);

list3.next = l3Second;

// ///Fourth List..

// const list4 = new Node(2);

// //Fifth List...
// const list5 = new Node(6);
const arr = [list1, list2, list3];
const printLinkedList = (node) => {
    let str = '';
    let curr = node;
    while (curr.next !== null) {
        str += `${curr.data} -> `;
        curr = curr.next;
    }

    str += `${curr.data}`;

    return str;
};
// const sl = new Solution();
const res = mergeKLists(arr);
console.log(printLinkedList(res));
