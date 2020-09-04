/**
 * 安装typescript的解析（编译器）对ts的代码（文件）进行编译转换
 *  npm install -g typescript
 *  yarn global add typescript
 * 安装完成以后，它会提供一个 tsc 命令工具，这个工具就是用来编译ts文件的，它有两个作用：
 *  - 把typescript的文件（代码）转换成 javascript 的文件（代码）
 *  - 在转换过程中对代码中的数据类型进行检测，看是否有类型使用上的错误
 */

// let a: number = 1;
// a.substring();

let text1:HTMLInputElement = document.querySelector('#text1');
let text2:HTMLInputElement = document.querySelector('#text2');
let btn:HTMLButtonElement = document.querySelector('#btn')
let result:HTMLSpanElement = document.querySelector('#result')


// btn.onclick = function() {
//     result.innerHTML = text1.value + text2.value;
// }

btn.addEventListener('click', function() {
    let rs: number = Number(text1.value) + Number(text2.value);
    result.innerHTML = rs.toString();
})

let obj: {x: number, y: number} = {
    x: 1,
    y: 2
};

obj.x;