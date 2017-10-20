//var KOA = require("koa");

var MyClient = require("mysql-pro");

//var app = new KOA();

var dbClient = new MyClient(
    {
        mysql:{
            host: "127.0.0.1",
            port: 3306,
            database: "db_test",
            user: "root",
            password: "654321"
        }
    }
);


var updateDB = async function(params) {

    await dbClient.startTransaction();
    var result = await dbClient.executeTransaction( "select * from user;", [] );

    console.log("init data=",result);

    //await dbClient.executeTransaction("update user set name = ?",[10, 1]);

    await dbClient.executeTransaction("update user set name = ? ,level = ? where id = ?",[10, 100, 1]);

    result = await dbClient.executeTransaction( "select * from user;", [] );


    await dbClient.stopTransaction();

    console.log(" end data=",result);

    
}


updateDB( null );


//app.listene(3005);


/**
 * 
    await client.startTransaction();
    await client.executeTransaction("select * from user;", []);
    await client.executeTransaction("update user set age = ? where id = ?;", [2, 1]);
    await client.executeTransaction("update user set name = ? where id = ?;", ['tom', 2]);
    await client.stopTransaction(); 
 */