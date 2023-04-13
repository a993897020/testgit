/*
 * @Author: 关振俊
 * @Date: 2023-03-14 11:02:24
 * @LastEditors: 关振俊
 * @LastEditTime: 2023-03-15 14:55:42
 * @Description: 
 */
let a:any;
a=null
let b:string|number;
b=566
interface ITest{
    a:number,
    b:string,
    c:IC[]
    d:IC
}
interface IC{
    ca:number,
    cb:string,
}
function foo(data:ITest){
}
const test=(a:string,b:number,c:IC[],d:IC)=>{
    console.log({a,b,c,d})
}
test('1',2,[{ca:1,cb:'2'}],{ca:1,cb:'3'})