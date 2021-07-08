"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var database_1 = __importDefault(require("./model/database"));
var userModel_1 = __importDefault(require("./model/userModel"));
var blogModel_1 = __importDefault(require("./model/blogModel"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(userRoutes_1.default);
database_1.default.authenticate().then(function () {
    userModel_1.default.hasMany(blogModel_1.default, { foreignKey: 'user_id', as: "blogDetail" });
    blogModel_1.default.belongsTo(userModel_1.default, { foreignKey: 'user_id' });
    console.log("Database connected...");
})
    .catch(function (err) { return console.log("Error"); });
app.listen(5000, function () {
    console.log("Server Running on Port a", 5000);
});
