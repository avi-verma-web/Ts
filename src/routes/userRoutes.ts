import { Router } from 'express'
import userCtrl from '../controller/userCtrl'
import blogsCtrl from '../controller/blogsCtrl'

const router = Router()

// -------------------------------------------
// TO CREATE TABLES
router.get('/createTable',userCtrl.createTable)
// -------------------------------------------
router.get("/users", userCtrl.getUser)
router.get("/users/:id", userCtrl.getUserById)
router.post("/users", userCtrl.createUser)
router.put("/users/:id", userCtrl.updateUser)
router.delete("/users/:id", userCtrl.deleteUser)
router.get("/users/blogs/:id", userCtrl.hasManyBlogs)
// -------------------------------------------
router.get("/blogs", blogsCtrl.getBlogs)
router.post("/blogs/:id", blogsCtrl.createBlog)
router.put("/blogs/:id", blogsCtrl.updateBlog)
router.delete("/blogs/:id", blogsCtrl.deleteBlog)

export default router
