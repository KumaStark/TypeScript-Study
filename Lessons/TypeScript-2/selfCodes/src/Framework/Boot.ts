import Koa from "koa";
import KoaRouter from "koa-router";
import KoaBody from "koa-body";
import KoaStaticCache from "koa-static-cache";
import Path from "path";

interface bootConfigs {
    port:number,
}

const defaultConfigs:bootConfigs = {
    port:8080,
}

export default class Boot{
    private configs: bootConfigs;
    private app: Koa;
    private router: KoaRouter;

    constructor(configs:bootConfigs){
        this.configs = {
            ...defaultConfigs,
            ...configs,
        };
    }

    start(){
        this.app = new Koa();
        this.addRouters();
        this.app.listen(8080, () => {
            console.log("Server Started !");
        });
    }

    addRouters(){
        this.router = new KoaRouter();
        
    }
}
