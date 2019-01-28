/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	let ans = str.match(/^[\s|-|\+]*[\-\+]?\d+/);
	ans = ans ? Number(ans[0]) || 0 : 0;
	if (ans > 2147483647) {
		return 2147483647;
	} else if (ans < -2147483648) {
		return -2147483648;
	} else {
		return ans;
	}
};
