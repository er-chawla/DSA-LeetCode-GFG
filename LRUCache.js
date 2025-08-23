class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
class LRUCache {
    cache = {};
    constructor(cap) {
        //  code here
        this.cap = cap;
        this.size = 0;
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addNode(node) {
        node.prev = this.head;
        node.next = this.head.next;

        this.head.next.prev = node;
        this.head.next = node;
    }

    removeNode(node) {
        const prev = node.prev;
        const next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    moveToHead(node) {
        this.removeNode(node);
        this.addNode(node);
    }

    popTail() {
        const item = this.tail.prev;
        this.removeNode(item);
        return item;
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        //  code here

        const item = this.cache[key];
        if (item) {
            this.moveToHead(item);
            return item.val;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */

    put(key, value) {
        // code here
        const item = this.cache[key];

        if (item) {
            item.val = value;
            this.moveToHead(item);
        } else {
            const node = new Node(key, value);
            this.cache[key] = node;
            this.addNode(node);
            this.size++;

            if (this.size > this.cap) {
                const tail = this.popTail();
                delete this.cache[tail.key];
                this.size--;
            }
        }
    }
}

const lruCache = new LRUCache(2);
lruCache.put(4, 4);
lruCache.put(3, 3);
lruCache.put(2, 2);
lruCache.put(1, 1);
lruCache.get(1);
lruCache.get(3);
lruCache.get(4);
