/**
 * 我们把所有与路由有关的函数与类进行绑定
 * 类中的方法就是要绑定到对应路由（url）中的方法
 * 
 * router.get('/', (new Main()).index);
 */
import {Get} from '../Kkb/Kkb';


// @Auth()
// @Template('/views')
export default class Main {

    // static __routes = [
    //     {
    //         verb: 'get',
    //         path: '/',
    //         name: 'index'
    //     }
    // ]

    @Get('/')
    // @Render('index.html')
    async index(ctx) {
        ctx.body = 'Hello KKB !!!!';
        // ctx.render('index.html', {})
    }

    @Get('/list')
    async list(ctx) {
        ctx.body = [1,2,3,4];
    }

}