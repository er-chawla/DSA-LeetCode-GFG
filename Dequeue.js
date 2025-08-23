class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Dequeue {
    constructor(cap = 100000) {
        this.cap = cap;
        this.size = 0;
        this.front = 0;
        this.arr = [];
    }

    isFull() {
        return this.size === this.cap;
    }

    isEmpty() {
        return this.size === 0;
    }

    insertFront(node) {
        if (this.isFull()) return 1e9;

        this.front = (this.front + 1) % this.cap;
        this.arr[this.front] = node;
        this.size++;
    }

    deleteFront(node) {
        if (this.isEmpty()) return -1e9;

        const res = this.arr[this.front];
        this.arr[this.front] = null;
        this.front = (this.front + 1) % this.cap;
        this.size--;
        return res;
    }

    push(node) {
        if (this.isFull()) return 1e9;

        const rear = (this.front + this.size) % this.cap;
        this.arr[rear] = node;
        this.size++;
    }

    pop(node) {
        if (this.isEmpty()) return -1e9;

        const rear = (this.front + this.size - 1) % this.cap;
        const res = this.arr[res];
        this.arr[rear] = null;
        this.size--;
        return res;
    }
}
