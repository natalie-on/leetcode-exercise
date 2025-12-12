/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n >= 3) {
        n = (n % 3 === 0) ? Math.floor(n / 3) : 0
    }

    return (n === 1);
};