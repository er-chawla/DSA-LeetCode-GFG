class KStack {
    constructor(n, k) {
        this.cap = n;
        this.freeTop = 0;
        this.arr = new Array(n);
        this.top = new Array(k).fill(-1);
        this.next = new Array(n).fill(-1);

        for (let i = 0; i < n - 1; i++) {
            this.next[i] = i + 1;
        }
    }

    push(sn, x) {
        const i = this.freeTop;
        this.freeTop = this.next[i];
        this.arr[i] = x;
        this.next[i] = this.top[sn];
        this.top[sn] = i;
    }

    pop(sn) {
        let i = this.top[sn];
        this.top[sn] = this.next[i];
        this.next[i] = this.freeTop;
        this.freeTop = i;
    }
}
