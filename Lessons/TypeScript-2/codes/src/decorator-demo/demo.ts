// function log(target: any, name: string, descriptor: PropertyDescriptor) {
//     //console.log('我是日志', target, name);

//     let value = descriptor.value;

//     descriptor.value = function() {
//         console.log('我是一个新的方法');
//         return value();
//     }

// }
function log(str) {

    return function(target: any, name: string, descriptor: PropertyDescriptor) {
        let value = descriptor.value;

        descriptor.value = function() {
            console.log('我是一个新的方法', str);
            return value();
        }
    }

}

class Person {

    @log('abc')
    method() {
        console.log('method');
    }

}


let p1 = new Person();
p1.method();