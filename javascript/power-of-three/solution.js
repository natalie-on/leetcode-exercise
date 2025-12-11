/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) return false;
    var x = Math.round((Math.log(n) / Math.log(3)) * 10) / 10;
    return (3 ** x == n) ? true : false;
};