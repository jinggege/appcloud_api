/**
 * 控制器管理 
 * 
 */

var Router = require('koa-router')
var routeCfg = require(global.CODE_PATH+'/config/route_cfg.js');

class Controller{

    constructor(){
        this.app = null;
    }

    start(app){
        this.app = app;
        this.regControl();
    }

    regControl(){
        var _this   = this;
        var ct      = null;
        var router  = null;
        var methods = null;

        routeCfg.forEach(function(ele) {
            methods = ele.methods;
            ct      = require(global.CODE_PATH+ele.controllerPath).control;
            router  = new Router();
            methods.forEach(function(md){
                router[md.toLowerCase()](ele.router,ct)
            });
            
            // 加载路由中间件
            _this.app.use(router.routes()).use(router.allowedMethods());
        });

        methods = null;
    }

}



module.exports = new Controller();

