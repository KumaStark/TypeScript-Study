import {Get, Post} from '../Kkb/Kkb';

export default class User {
    
    @Get('/register')
    async register(ctx) {
        ctx.body = '注册界面';
    }

    @Get('/login')
    async login(ctx) {
        ctx.body = '登陆界面';
    }

    @Post('/login')
    async loginVerify(ctx) {
        ctx.body = '登陆验证接口';
    }

}