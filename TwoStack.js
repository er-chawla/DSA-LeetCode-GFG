class TwoStack {
    constructor(cap) {
        this.cap = cap;
        this.st1 = -1;
        this.st2 = cap;
        this.arr = new Array(cap).fill(null);
        this.sz = 0;
    }

    push1(x) {
        if (this.sz === this.cap) {
            return 'Stack1 is Overflow!!';
        }

        this.arr[++this.st1] = x;
        this.sz++;
    }

    push2(x) {
        if (this.sz === this.cap) {
            return 'Stack2 is OverFlow!!';
        }

        this.arr[--this.st2] = x;
        this.sz++;
    }

    pop1() {
        if (this.sz1 === 0) {
            return console.log('Stack 1 is Empty');
        }

        const item = this.arr[this.st2];
        this.arr[this.st1--] = null;
        this.sz--;
        return item;
    }

    pop2() {
        console.log(this.st2);
        const item = this.arr[this.st2];
        this.arr[this.st2++] = null;
        this.sz--;
        return item;
    }
}

const ts = new TwoStack(10);

console.log(ts.push1(2));
console.log(ts.push1(4));
console.log(ts.push1(6));
console.log(ts.push2(1));
console.log(ts.push2(3));
console.log(ts.push2(5));
console.log(ts.push2(7));
console.log(ts.push2(9));
console.log(ts.push2(11));
console.log(ts.push1(8));
console.log(ts.push1(10));
console.log(ts.push1(12));
console.log(ts.pop2());
console.log(ts.push2(15));
console.log(ts.push2(17));
console.log(ts);
