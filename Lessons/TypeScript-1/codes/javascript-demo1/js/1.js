let text1 = document.querySelector('text1');
let text2 = document.querySelector('text2');
let btn = document.querySelector('#btn')
let result = document.querySelector('#result')

// 这里就是出现一种数据类型上的使用错误
// 对某一种类型的数据使用它不存在的操作，比如：你把一个不是食物（类型）的东西给吃了
// 我们的js是不能在程序运行之前就能把这个类型错误给提示出来的
// 但是，往往这个时候，就会出大事，我们能不能在程序运行之前就把这种类型错误给处理了
// 但是js不能，js是一个动态类型语言
// 动态类型：变量的类型是动态，可变的，不确定，数据的类型是在运行过程中随时可变的，那么我们就不能在运行之前对它进行检测了
btn.onclick = function() {
    result.innerHTML = text1.value + text2.value;
}