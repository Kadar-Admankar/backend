import express from 'express';
import { addBlog, getAllBlogs } from '../controllers/blogController.js';

const blogRouter = express.Router()

blogRouter.get('/', getAllBlogs)
blogRouter.post('/add', addBlog)
blogRouter.put('/update/:id', )

export default blogRouter