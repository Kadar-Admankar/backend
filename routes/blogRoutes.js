import express from 'express';
import { addBlog, deleteBlog, gerByUserId, getAllBlogs, getById, updateBlog } from '../controllers/blogController.js';

const blogRouter = express.Router()

blogRouter.get('/', getAllBlogs)
blogRouter.post('/add', addBlog)
blogRouter.put('/update/:id', updateBlog)
blogRouter.get('/:id', getById)
blogRouter.delete('/:id', deleteBlog)
blogRouter.get("/user/:id", gerByUserId)

export default blogRouter