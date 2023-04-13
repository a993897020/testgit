/*
 * @Author: 关振俊
 * @Date: 2023-03-14 11:02:24
 * @LastEditors: 关振俊
 * @LastEditTime: 2023-03-15 14:55:42
 * @Description:
 */
var a;
a = null;
var b;
b = 566;
function foo(data) {
}
var test = function (a, b, c, d) {
    console.log({ a: a, b: b, c: c, d: d });
};
test('1', 2, [{ ca: 1, cb: '2' }], { ca: 1, cb: '3' });
