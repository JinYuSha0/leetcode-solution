/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	return x == String(x).split('').reverse().join('');
};

console.log(isPalindrome(121))
