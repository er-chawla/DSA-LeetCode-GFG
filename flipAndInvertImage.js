/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    const invert = (val) => {
        return !val;
    };
    for (let i = 0; i < image.length; i++) {
        let cord = image[i];
        let j = 0,
            k = cord.length - 1;
        while (j <= k) {
            [cord[j], cord[k]] = [cord[k], cord[j]];
            if (j === k) {
                cord[j] = +invert(cord[j]);
            } else {
                cord[j] = +invert(cord[j]);
                cord[k] = +invert(cord[k]);
            }
            j++;
            k--;
        }
    }
    image;
    return image;
};

const image = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
];

flipAndInvertImage(image);
