class Queue {
    constructor(cap) {
        this.cap = cap;
        this.arr = [];
        this.front = 0;
        this.sz = 0;
    }

    enqueue(x) {
        if (this.sz === this.cap) {
            return 'Queue is full';
        }

        let rear = (this.front + this.sz - 1) % this.cap;
        rear = (rear + 1) % this.cap;
        this.arr[rear] = x;
        this.sz++;
    }

    dequeue() {
        if (this.sz === 0) {
            return 'Queue is empty';
        }
        const res = this.arr[this.front];
        this.front = (this.front + 1) % this.cap;
        this.sz--;
        return res;
    }

    top() {
        return this.arr[this.front];
    }

    size() {
        return this.sz;
    }
}

function generateNumber(n) {
    let qu = new Queue(n);
    qu.enqueue('5');
    qu.enqueue('6');

    let i;
    for (i = 0; i + qu.size() < n; i++) {
        let curr = qu.top();
        console.log(qu.dequeue());
        qu.enqueue(curr + '5');
        qu.enqueue(curr + '6');
    }

    while (i < n) {
        console.log(qu.dequeue());
        i++;
    }
}

const nums = ['(', ')'],
    n = 10;
generateNumber(n);
