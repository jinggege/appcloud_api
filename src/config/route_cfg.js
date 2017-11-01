/**
 * 路由配置
 */
module.exports = [
    {
        name:"",
        router:"/u/:action",
        controllerPath:"/controllers/userdata/userdata.js",
        methods:["GET","POST"],
        desc:'获取用户数据'
    },
    {
        name:"",
        router:"/nb/:action",
        controllerPath:"/controllers/notebook/notebook.js",
        methods:["GET","POST"],
        desc:'获取用户数据'
    }
    
 
   
];

