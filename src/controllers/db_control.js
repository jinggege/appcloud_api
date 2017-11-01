"use strict"

var DbClient = require("mysql-pro");

class DBCtrol{

    constructor(){
        this.dbConfig = null;
        this.db = null;

    }

    connet(dbConfig){
        this.dbConfig = dbConfig;

        this.db = new DbClient(
            {
                mysql:dbConfig
            }
        );
    }

    update(sql, data){
        

    }

    async addUser(uId, uName, role){
        await this.db.startTransaction();
        var resule = await this.db.executeTransaction( "insert into book_user set name = ?, uid= ?, role=? " ,[uName,uId, role]);
        await this.db.stopTransaction();
        return resule;

        /*
        await this.db.startTransaction();
        var resule = await this.db.executeTransaction( "insert into book_user(name,uid,role) values('mg', 54332, 2)");
        await this.db.stopTransaction();
        return resule;
        */

    }

    async delUser(uId){
        await this.db.startTransaction();
        var resule = await this.db.executeTransaction( "delete from book_user where uid=? " ,[uId]);
        await this.db.stopTransaction();
        return resule;
    }

    async addTitle(titleId, title){
        await this.db.startTransaction();
        var resule = await this.db.executeTransaction( "insert into book_title set title_id = ?, title= ? " ,[titleId,title]);
        await this.db.stopTransaction();
        return resule;
    }


}

module.exports = new DBCtrol();

/**
 * 
 * mysql:{
            host: "127.0.0.1",
            port: 3306,
            database: "db_test",
            user: "root",
            password: "654321"
        }


     await dbClient.startTransaction();
    var result = await dbClient.executeTransaction( "select * from user;", [] );

    console.log("init data=",result);

    //await dbClient.executeTransaction("update user set name = ?",[10, 1]);

    await dbClient.executeTransaction("update user set name = ? ,level = ? where id = ?",[10, 100, 1]);

    result = await dbClient.executeTransaction( "select * from user;", [] );

    await dbClient.executeTransaction( "insert into user set name = ?, level= ?" ,["jgg", 301]);



    await dbClient.stopTransaction();
 */

 /**
  * 

    CREATE TABLE `database_user` (    
`UserID` varchar(40) NOT NULL default ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;  

  */