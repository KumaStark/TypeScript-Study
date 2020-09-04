import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaBody from 'koa-body';
import KoaStaticCache from 'koa-static-cache';
import glob from 'glob';
import path from 'path';

// 利用 node 去自动的收集controller类
// import MainController from '../controllers/Main'

interface KkbConfigs {
    port: number;
}

const defaultConfigs = {
    port: 8080
}

export default class Kkb {

    private configs: KkbConfigs;
    private app: Koa;
    private router: KoaRouter;

    constructor(configs: KkbConfigs) {
        this.configs = {
            ...defaultConfigs,
            ...configs
        };

        this.app = new Koa();

        this.addRoutes();
    }

    addRoutes() {
        this.router = new KoaRouter();

        let controllerPath = path.resolve(__dirname, '../controllers/**/*')
        let controllerFiles = glob.sync(controllerPath);

        try {
            controllerFiles.forEach(async controllerFile => {
                // 装饰器在类被import进来的时候就执行了
                const Controller = (await import(controllerFile)).default;
                // console.log('Controller', Controller);
                const controller = new Controller();
                // 根据类的 __routes 这个数据去注册路由
                if (Array.isArray(Controller.__routes)) {
                    console.log('Controller File:', controllerFile);
                    console.log('__routes', Controller.__routes);
                    Controller.__routes.forEach( __route => {
                        this.router[__route.verb](
                            __route.path,
                            controller[__route.name]
                        );
                    } );
                }
            } );
            this.app.use(this.router.routes());

        } catch(e){
            console.log(e);
        }

        
    }

    start() {
        this.app.listen(this.configs.port, () => {
            console.log(`服务启动成功：http://localhost:${this.configs.port}`);
        });
    }

}

export const Get = function(path: string) {
    return function(target: any, name: string, descriptor: PropertyDescriptor) {
        let constructor = target.constructor;
        if (!Array.isArray(constructor.__routes)) {
            constructor.__routes = [];
        }
        constructor.__routes.push({
            verb: 'get',
            path,
            name
        })
    }
}

// 作业
export const Post = function (path: string) {
    return function (target: any, name: string, descriptor: PropertyDescriptor) {
        // target是controller类实例化后被装饰的方法
        // 通过.constructor来获取自己所属类的原型
        let constructor = target.constructor;
        // 判断该原型下的__routes数组是否为空
        if (!Array.isArray(constructor.__routes)) {
            // 数组为空说明是该类注册第一个路由，因此先创建寄存路由信息的空数组
            constructor.__routes = [];
        }
        // 向该数组内推入路由信息
        constructor.__routes.push({
            verb: 'post',   // 数据请求的方法
            path,           // 调用的URL
            name            // 路由所需执行的类中的方法名称
        })
    }
}