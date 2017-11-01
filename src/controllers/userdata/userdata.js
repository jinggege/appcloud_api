
var URL = require("url");

var DBC = require(global.CODE_PATH+'/controllers/db_control.js');

/**
 * 用户数据
 */

class UserData{

    constructor(){ }

    async control(ctx){

        var action = ctx.params.action;

        var args = URL.parse(ctx.req.url,true).query;

        let uName = '';
        let uId = -1;
        let role = -1;

        switch(action){
            case 'add' :
                uName = args.uName;
                uId = Date.now();
                role = 1;
                var result = await DBC.addUser(uId, uName, role );
                ctx.body = result;
            break;

            case 'del' :
                uName = args.uName;
                uId = args.uId;
                var result = await DBC.delUser(uId, uName);
                console.log(result);
                ctx.body = result;
            break;

        }




    }



}


module.exports = new UserData();