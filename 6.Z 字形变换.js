/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if (numRows === 1) return s;
	const chartArr = [], n = (numRows - 1) * 2;
	for (let i = 0; i < numRows; i++) {
		chartArr.push([]);
	}
	for (let i = 0, j = 0; j < s.length; j++) {
		if (i > n  - 1) i = 0;
		const X = Math.floor(j / n) * (1 + n - numRows) + (i <= numRows - 1 ? 0 : i - numRows + 1);
		const Y = i < numRows ? i : n % i;
		chartArr[Y][X] = s[j];
		i++;
	}
	return chartArr.map(sArr => sArr.join('')).join('');
};
