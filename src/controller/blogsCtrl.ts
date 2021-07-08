import { Request, Response } from 'express'
import Blogs from '../model/blogModel'

const BlogsCtrl = {
    getBlogs: async (req: Request, res: Response): Promise<Response> => {
        try {
            const result = await Blogs.findAll()
            return res.status(200).json(result)
        } catch (e) {
            return res.status(500).json('Internal Server Error')
        }
    },

    createBlog: async (req: Request, res: Response): Promise<Response> => {
        try {
            const { title, content } = req.body
            await Blogs.create({
                title,
                content,
                user_id: req.params.id
            });
            return res.status(200).json({ message: "Blogs created Successfully", body: { Blogs: { title, content } } })
        } catch (e) {
            console.log(e)
            return res.status(500).json('Internal Server Error')
        }

    },
    updateBlog: async (req: Request, res: Response): Promise<Response> => {
        try {
            const { title, content } = req.body
            let data = await Blogs.findAll({
                where: {
                    id: req.params.id
                }
            });
            if (data.length === 0) {
                return res.status(200).json("Blogs Does not Exist")
            }
            await Blogs.update(
                { title, content },
                {
                    where: { id: req.params.id },
                }
            );
            return res.status(200).json({ message: "Blogs Updated Successfully", body: { Blogs: {title,content } } })
        } catch (e) {
            console.log(e)
            return res.status(500).json('Internal Server Error')
        }

    },
    deleteBlog: async (req: Request, res: Response): Promise<Response> => {
        await Blogs.destroy({
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json("Blog deleted Successfully")
    },

}

export default BlogsCtrl