let isHas = [1, 2, 3].includes(2)

new Promise((resolve, reject) => {
  resolve(100)
})

// es6+ 源码：
// const asyncFun = async () => {
//   await new Promise(setTimeout, 2000)

//   return '2s 延时后返回字符串'
// }
// export default asyncFun
