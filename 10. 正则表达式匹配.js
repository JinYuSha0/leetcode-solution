/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
	const m = s.length, n = p.length, arr = [];
	for (let i = 0; i < m+1; i++) {
		arr.push(new Array(n+1));
	}
	arr[0][0] = true;
	for (let i = 0; i < m+1; i++)
		for (let j = 1; j < n+1; j++)
			if (p[j-1] === '*')
				/**
				 * arr[i][j-2] 含义: *可以代表0个 所以j-2通过时 arr[i][j]可以直接通过 例如: ab.* 可以匹配 ab
				 * arr[i-1][j] 含义: 上一个字符必须匹配 例如: ab* 不能匹配 abbcb
				 */
				arr[i][j] = arr[i][j-2] || (i > 0 && (s[i-1] === p[j-2] || p[j-2] === '.') && arr[i-1][j]);
			else
				arr[i][j] = i > 0 && arr[i-1][j-1] && (s[i-1] === p[j-1] || p[j-1] === '.');
	return !!arr[m][n];
};


/*  0 i a b c d e d e */
/*  j 1               */
/*  a 0 1 0 0 0 0 0 0 */
/*  b 0 0 1 0 0 0 0 0 */
/*  . 0 0 0 1 0 0 0 0 */
/*  * 0 0 1 1 1 1 1 1 */
/*  d 0 0 0 0 1 0 1 0 */
/*  e 0 0 0 0 0 1 0 1 */

/* 0 i a b b c b */
/* j 1           */
/* a 0 1 0 0 0 0 */
/* b 0 0 1 1 0 1 */
/* * 0 1 1 1 0 0 */

// console.log(isMatch('abcdede', 'ab.*de'));
// console.log(isMatch('mississippi', 'mis*is*ip*.'))
// console.log(isMatch('aaa', 'a*a'))
// console.log(isMatch('aaa', 'aaaa'))
// console.log(isMatch('abcd', 'd*'))
// console.log(isMatch('aaa', 'ab*a*c*a'))
// console.log(isMatch('aaca', 'ab*a*c*a'))
// console.log(isMatch('a', '.*..a*'))
console.log(isMatch('ab', '.*..c*'))
// console.log(isMatch('a', '.*..a*'))
// console.log(isMatch('', '.'))
// console.log(isMatch('aa', 'a*'))
// console.log(isMatch('abbbcd', 'ab*bbbcd'))
// console.log(isMatch('aa', 'a'))
// console.log(isMatch('aasdfasdfasdfasdfas', 'aasdf.*asdf.*asdf.*asdf.*s'))
