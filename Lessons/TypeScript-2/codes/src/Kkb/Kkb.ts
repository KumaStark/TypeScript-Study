// const Koa = require('koa');
// const KoaRouter = require('koa-router');
// const KoaBody = require('koa-body');
// const KoaStaticCache = require('koa-static-cache');
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
    port: 8888
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

        // let controller = new MainController();
        // 如果路由与类方法的绑定写成下面这种硬编码的方式，是不方便扩展的
        // 如果增加一个类，那么就得到这个Kkb addRoutes 方法中进行修改
        // this.router.get('/', controller.index);

        // console.log('__dirname', __dirname);
        // 通过 glob 来自动加载 Controller 类文件，在指定的位置增加一个类文件以后，也不需要来这里进行修改了
        let controllerPath = path.resolve(__dirname, '../controllers/**/*')
        let controllerFiles = glob.sync(controllerPath);
        // console.log('controllerFiles', controllerFiles);
        try {
            controllerFiles.forEach( async controllerFile => {
                // 装饰器在类被import进来的时候就执行了
                const Controller = (await import(controllerFile)).default;
                // console.log('Controller', Controller);

                

                const controller = new Controller();
                // console.log('controller', controller);
                // 但是仅仅知道类，还不够，还需要知道类中的哪个方法与路由的哪个方法（get、post等）以及url进行绑定
                // 所以，我们通过不同的类下的一个属性 __routes 来定义类方法与路由的映射关系
                // 我们手动为每一个类定义一个属性：__routes
                // MainControler.__routes = [
                //     {
                //         verb: 'get',
                //         path: '/',
                //         name: 'index'
                //     }
                // ]
                

                // 根据装饰器执行的时候，收集的信息，对类以及方法进行收集，在router中进行注册
                // 我们希望通过 一个 方法来帮助我们去构建上面的这个 __routes 属性
                // 利用装饰器
                

                // 根据类的 __routes 这个数据去注册路由
                if (Array.isArray(Controller.__routes)) {
                    console.log('Controller.__routes', Controller.__routes);
                    
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
            console.log(`服务启动成功：http://localhost:8888`);
        });
    }

}

/**
 * 我们要封装的Get装饰器函数
 * 利用 Get 装饰器函数对类的信息进行收集
 */
export const Get = function(path: string) {
    return function(target: any, name: string, descriptor: PropertyDescriptor) {
        // 因为当前装饰器是装饰到了实例方法中，所以target是实例
        
        // constructor Get装饰器装饰的方法所在类
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
export const Post = function() {

}