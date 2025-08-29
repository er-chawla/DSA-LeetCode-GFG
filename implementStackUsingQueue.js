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

/**
 * Method 1 Where Push operation is too heavy O(n) TC;
 */
class StackUsingQueue {
    constructor(cap) {
        this.cap = cap;
        // Q1 is actual queue
        this.q1 = new Queue(this.cap);

        //Q2 is Aux Queue for operation to Make Stack (FIFO)
        this.q2 = new Queue(this.cap);
    }

    push(x) {
        //New Item is enqueue in Q2 Queue..
        this.q2.enqueue(x);

        /// Move all item from Q1 to Q2
        while (this.q1.sz) {
            const item = this.q1.dequeue();
            this.q2.enqueue(item);
        }

        // // Move every item from Q2 to Q1 (Aux Queue to Actual Queue)
        // This below code is take extra loop to insert back all q2 item in q1
        // while (this.q2.sz) {
        //     const item = this.q2.dequeue();
        //     this.q1.enqueue(item);
        // }
        [this.q1, this.q2] = [this.q2, this.q1];
    }

    pop() {
        return this.q1.dequeue();
    }

    size() {
        return this.q1.size();
    }

    top() {
        return this.q1.top();
    }
}

const st = new StackUsingQueue(5);

st.push(10);
st.push(20);
st.push(30);
st.push(10);
console.log(st.top());
console.log(st.pop());
console.log(st.top());
console.log(st.size());
