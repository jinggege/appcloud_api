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