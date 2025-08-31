/// Naive/ Brute force solution
class Solution {
    startStation(gas, cost) {
        //  code here
        for (let i = 0; i < gas.length; i++) {
            let remainingGas = 0;
            let findResult = true;
            for (let j = 0; j < cost.length; j++) {
                const idex = (i + j) % cost.length;
                remainingGas += gas[idex];
                if (remainingGas - cost[idex] < 0) {
                    findResult = false;
                    break;
                }
                remainingGas = remainingGas - cost[idex];
            }
            if (findResult) {
                return i;
            }
        }
        return -1;
    }
}

const gas = [4, 5, 7, 4],
    cost = [6, 6, 3, 5];

const sl = new Solution().startStation(gas, cost);
console.log(sl);
