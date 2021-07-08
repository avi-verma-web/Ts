"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var database_1 = __importDefault(require("./database"));
// table_name couloumn_names
var Blogs = database_1.default.define("blogs", {
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    title: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
}, {
    timestamps: false,
});
exports.default = Blogs;
