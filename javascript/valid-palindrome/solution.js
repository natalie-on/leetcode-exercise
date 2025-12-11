/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var format = /[^a-zA-Z0-9]/g;
    let palindromeStr = '';
    let replacedStr = s.replace(format, '').toLowerCase();    
    for (let i = replacedStr.length - 1; i >= 0; --i) {
        palindromeStr += replacedStr.toLowerCase().at(i);
    }
    
    return (palindromeStr == replacedStr) ? true : false;
};