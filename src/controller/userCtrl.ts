import { Request, Response } from 'express'
import Users from '../model/userModel'
import Blogs from '../model/blogModel'
import db from '../model/database'
const userCtrl = {
    createTable: async (req: Request, res: Response): Promise<Response> => {
        try {
            await db.sync({ force: true })
            return res.status(200).json("Table created")
        } catch (e) {
            return res.status(500).json('Internal Server Error')
        }
    },
    getUser: async (req: Request, res: Response): Promise<Response> => {
        try {
            const result = await Users.findAll()
            return res.status(200).json(result)
        } catch (e) {
            return res.status(500).json('Internal Server Error')
        }

    },
    getUserById: async (req: Request, res: Response): Promise<Response> => {
        try {
            const result = await Users.findAll({
                where: {
                    id: req.params.id
                }
            })
            return res.status(200).json(result)
        } catch (e) {
            return res.status(500).json('Internal Server Error')
        }
    },
    createUser: async (req: Request, res: Response): Promise<Response> => {


        try {
            const { name, email } = req.body
            let data = await Users.findAll({
                where: {
                    email
                }
            });
            if (data.length > 1) {
                return res.status(200).json("User Already Exists")
            }
            await Users.create({
                name,
                email,
            });
            return res.status(200).json({ message: "User created Successfully", body: { user: { name, email } } })
        } catch (e) {
            return res.status(500).json('Internal Server Error')
        }

    },
    updateUser: async (req: Request, res: Response): Promise<Response> => {
        try {
            const { name, email } = req.body
            let data = await Users.findAll({
                where: {
                    id: req.params.id
                }
            });
            if (data.length === 0) {
                return res.status(200).json("User Does not Exist")
            }
            await Users.update(
                { name, email },
                {
                    where: { id: req.params.id },
                }
            );
            return res.status(200).json({ message: "User Updated Successfully", body: { user: { name, email } } })
        } catch (e) {
            return res.status(500).json('Internal Server Error')
        }

    },
    deleteUser: async (req: Request, res: Response): Promise<Response> => {
        await Users.destroy({
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json("User deleted Successfully")
    },
    hasManyBlogs: async (req: Request, res: Response): Promise<Response> => {
        try {
            let data = await Users.findAll({
                include: [{ model: Blogs, as: "blogDetail", attributes: ['title', 'content'] }],
                where: { id: req.params.id }
            })
            return res.json(data)
        } catch (e) {
            return res.send(e.message)

        }
    }
}

export default userCtrl