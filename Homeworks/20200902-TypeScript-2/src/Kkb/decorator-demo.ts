// function log(target: any, name: string, descriptor: PropertyDescriptor) {
//     //console.log('我是日志', target, name);

//     let value = descriptor.value;

//     descriptor.value = function() {
//         console.log('我是一个新的方法');
//         return value();
//     }

// }
// function log(str:string) {
//     console.log("我是编译过程的调用！");
//     return function(target: any, name: string, descriptor: PropertyDescriptor) {
//         let value = descriptor.value;
//         descriptor.value = function() {
//             console.log('我是一个新的方法', str);
//             return value();
//         }
//     }
// }

function log (target: any, name: string, descriptor: PropertyDescriptor) {
        let value = descriptor.value;
        descriptor.value = function() {
            console.log('我直接就是个新装饰器函数');
            return value();
        }
    }

class Person {
    // @log('abc')
    @log
    method() {
        console.log('原method');
        return "原函数的返回值";
    }
}
let p1 = new Person();
let res =  p1.method();
console.log("最终返回", res)