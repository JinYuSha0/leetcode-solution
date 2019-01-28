const str = '123sjy456'

// 前瞻
console.log(str.match(/(\d+)(?=sjy)/)[0])

// 后顾
console.log(str.match(/(?<=sjy)(\d+)/)[0])

// 负前瞻 后面不是sjy的数字
console.log(str.match(/(\d{3})(?!sjy)/g)[0])

// 负后顾 前面不是sjy的数字
console.log(str.match(/(?<!sjy)(\d+)/)[0])


// 前瞻的非捕获性
const str2 = '<div>,<p>,<h1>,<span>,</span>,</h1>,</p>,</div>'
const newStr2 = str2.replace(/(\/?)(?!p)/g, '<$1p>')
console.log(newStr2)
const newStr3 = str2.match(/<(\/?)(?!p|\/p).*?>/g, '<$1p>')
console.log(newStr3)

// 金额千分位格式化
const count = '123456789'
const reg = /(\d)(?=(\d{3})+(?!\d))/g
console.log(count.replace(reg, '$1,'))
