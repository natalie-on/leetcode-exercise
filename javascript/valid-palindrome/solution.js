/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const format = /[^a-zA-Z0-9]/g;
    const replacedStr = s.replace(format, '').toLowerCase();
    
    let j = replacedStr.length;
    for (let i = 0; i <= replacedStr.length / 2; ++i) {
        if (replacedStr.at(i) != replacedStr.at(j - 1)) {
            return false;
        }
        --j;
    }
    return true;    
};