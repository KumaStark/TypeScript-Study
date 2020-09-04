/**
 * 定义一个函数
 *  这个函数，允许我们在不同的一些情况下调用
 *  比如下面这个fn
 *      要么：1、x为数字，y为数字
 *      要么：2、x为字符串，y为字符串 
 * 
 */

//  function fn(x: number|string, y: number|string) {

//  }

// 当一个函数的参数类型，参数个数不同的情况下，为了能够支持上面需求的类型情况，我们可以定义多个同名函数的不同类型结构
function fn(x: number, y: number);
function fn(x: string, y: string);
function fn(x: any, y: any) {
    // ....
}

// 它会按照上面定义的重载去进行检测
// fn(1, '2');
fn(1, 2);
fn('1', '2');
fn(1, '2');
fn('1', 2);

// fn(int x, int y) {

// }
// fn(char x, char y) {

// }