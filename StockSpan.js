var StockSpanner = function () {
    this.stock = [];
    this.prices = [];
    this.currDay = 0;
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    const stock = this.stock;
    const prices = this.prices;

    while (stock.length > 0 && prices[stock[stock.length - 1]] < price) {
        stock.pop();
    }

    let res = 0;
    if (this.stock.length === 0) {
        res = this.currDay + 1;
    } else {
        res = this.currDay - stock[stock.length - 1];
    }

    this.prices.push(price);
    this.stock.push(this.currDay);
    this.currDay++;
    return res;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

var obj = new StockSpanner();
var param_1 = obj.next(100);
console.log(param_1);
var param_2 = obj.next(80);
console.log(param_2);
var param_3 = obj.next(60);
console.log(param_3);
var param_4 = obj.next(70);
console.log(param_4);
var param_5 = obj.next(60);
console.log(param_5);
var param_6 = obj.next(75);
console.log(param_6);
var param_7 = obj.next(85);
console.log(param_7);

///["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]]
// const arr = [60, 10, 20, 40, 35, 38, 50, 70, 65];

// stockSpan(arr);
