"use strict"

global.CODE_PATH = __dirname+'/src';

const PORT = 3005;

var KOA = require("koa");

var DBC = require(global.CODE_PATH+'/controllers/db_control.js');

var dbCfg = require(global.CODE_PATH+'/config/db_cfg.js');

var Ctr = require(global.CODE_PATH+'/controllers/controller.js');

var app = new KOA();

DBC.connet( dbCfg );

Ctr.start( app );




app.listen( PORT );
console.log('server start by '+PORT);


