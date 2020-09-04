import {Get, Post} from '../Kkb/Kkb';

// @Controller('/user')
// @Template('/template')
export default class User {

    // static __routes = [
    //     {
    //         verb: 'get',
    //         path: '/register',
    //         name: 'index'
    //     }
    // ]

    
    @Get('/register')
    async register(ctx) {
        ctx.body = 'register';
    }

    @Get('/login')
    async login(ctx) {
        ctx.body = 'login';
    }

    @Post('/login')
    async loginVerify(ctx) {
        ctx.body = 'login';
    }

}