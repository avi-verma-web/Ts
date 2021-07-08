"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var database_1 = __importDefault(require("./database"));
// table_name couloumn_names
var Users = database_1.default.define("users", {
    name: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    email: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
}, {
    timestamps: false,
});
exports.default = Users;
