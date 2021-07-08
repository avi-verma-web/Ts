"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userCtrl_1 = __importDefault(require("../controller/userCtrl"));
var blogsCtrl_1 = __importDefault(require("../controller/blogsCtrl"));
var router = express_1.Router();
// -------------------------------------------
// TO CREATE TABLES
router.get('/createTable', userCtrl_1.default.createTable);
// -------------------------------------------
router.get("/users", userCtrl_1.default.getUser);
router.get("/users/:id", userCtrl_1.default.getUserById);
router.post("/users", userCtrl_1.default.createUser);
router.put("/users/:id", userCtrl_1.default.updateUser);
router.delete("/users/:id", userCtrl_1.default.deleteUser);
router.get("/users/blogs/:id", userCtrl_1.default.hasManyBlogs);
// -------------------------------------------
router.get("/blogs", blogsCtrl_1.default.getBlogs);
router.post("/blogs/:id", blogsCtrl_1.default.createBlog);
router.put("/blogs/:id", blogsCtrl_1.default.updateBlog);
router.delete("/blogs/:id", blogsCtrl_1.default.deleteBlog);
exports.default = router;
