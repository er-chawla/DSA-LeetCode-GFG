/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
    const totalSector = Math.floor(Math.sqrt(baskets.length));
    const sectorMax = new Array(totalSector).fill(0);
    let unPlacedFruits = 0;
    const findMaxInSector = () => {
        let maxSectorValue = baskets[0];
        let currSector = 0;
        for (let i = 1; i < baskets.length; i++) {
            if (i % totalSector === 0) {
                sectorMax[currSector++] = maxSectorValue;
                maxSectorValue = 0;
            }
            maxSectorValue = Math.max(maxSectorValue, baskets[i]);
        }
        sectorMax[currSector] = maxSectorValue;
    };

    findMaxInSector();

    for (let i = 0; i < fruits.length; i++) {
        let sectorIdx = -1;
        for (let j = 0; j < sectorMax.length; j++) {
            if (fruits[i] <= sectorMax[j]) {
                sectorIdx = j;
                break;
            }
        }

        if (sectorIdx === -1) {
            unPlacedFruits++;
        } else {
            let sectorStartIdx = totalSector * sectorIdx;
            for (
                let j = sectorStartIdx;
                j < sectorStartIdx + totalSector;
                j++
            ) {
                if (fruits[i] <= baskets[j]) {
                    baskets[j] = 0;
                    findMaxInSector();
                    break;
                }
            }
        }
    }

    return unPlacedFruits;
};

const fruits = [4, 2, 5],
    baskets = [3, 5, 4];
console.log(numOfUnplacedFruits(fruits, baskets));
