function maxConsecutive1(arr, k) {
    let i = 0,
        currFlip = k;
    let currWindow = 0;
    let res = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === 0) {
            let l = j;
            if (currFlip === 0) {
                let reSzWindow = k;
                while (reSzWindow > 0) {
                    if (arr[l] === 0) {
                        reSzWindow--;
                    }
                    l--;
                }
                i = l;
                currWindow = j - i;
            } else {
                currFlip -= 1;
                currWindow++;
            }
        } else {
            currWindow += 1;
        }
        res = Math.max(currWindow, res);
    }

    return res;
}

const arr = [1, 0, 0, 0],
    k = 1;

console.log(maxConsecutive1(arr, k));
