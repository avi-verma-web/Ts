"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db = new sequelize_1.Sequelize("ts_database_crud", "postgres", "12345678", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
});
exports.default = db;
