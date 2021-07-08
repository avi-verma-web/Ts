import express from 'express';
import userRoutes from './routes/userRoutes'
import db from './model/database'
import Users from './model/userModel'
import Blogs from './model/blogModel'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(userRoutes)

db.authenticate().then(() => {
    Users.hasMany(Blogs, { foreignKey: 'user_id', as: "blogDetail" })
    Blogs.belongsTo(Users, { foreignKey: 'user_id' })
    console.log("Database connected...")
})
    .catch((err) => console.log("Error"));


app.listen(5000, () => {
    console.log("Server Running on Port a", 5000)
})