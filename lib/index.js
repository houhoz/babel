"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _context;

var isHas = (0, _includes.default)(_context = [1, 2, 3]).call(_context, 2);
new _promise.default(function (resolve, reject) {
  resolve(100);
}); // es6+ 源码：
// const asyncFun = async () => {
//   await new Promise(setTimeout, 2000)
//   return '2s 延时后返回字符串'
// }
// export default asyncFun