/**
 * 函数重载
 *  同一个函数有不同的参数（参数类型，参数个数），但是无论是哪种，参数的类型是可以在定义函数的时候就可以确定
 * 
 */

function fn1(x: number, y: number);
function fn1(x: string, y: string);
function fn1(x: any, y: any){}

/**
 * 但是，有的时候是我们根本就无法去定义约束传入的参数的类型
 */
function merge<T1, T2>(obj1: T1, obj2: T2) {
    // 做事情
    return Object.assign(obj1, obj2);
}


interface USER {
    id: number,
    name: string
}
interface KKB {
    classType: '高级'|'全栈'
}

merge<USER, KKB>({
    id: 1,
    name: 'zMouse'
}, {
    classType: '高级'
});


merge<KKB, USER>({
    classType: '高级'
}, {
    id: 1,
    name: 'zMouse'
});