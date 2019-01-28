/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	if (!s) return '';
	const n = s.length;
	let start = 0, end = 0;
	for (let i = 0; i < n; i++) {
		const len1 = expandAroundCenter(s, i, i);
		const len2 = expandAroundCenter(s, i, i + 1);
		const len = Math.max(len1, len2);
		const isTwo = len2 > len1;
		if (len > end - start) {
			if (!isTwo) {
				start = i - (len - 1) / 2;
				end = i + (len - 1) / 2;
			} else {
				start = i - (len - 2) / 2;
				end = i + (len - 2) / 2 + 1;
			}
		}
	}
	return s.substring(start, end + 1);
};

var expandAroundCenter = function(s, left, right) {
	let L = left, R = right;
	while (L >= 0 && R < s.length && s[L] === s[R]) {
		L--;
		R++;
	}
	return R - L - 1;
};
