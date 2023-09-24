import Blog from "../models/Blog.js";

export const getAllBlogs = async (req, res, next)=>{
    let blogs;
    try {
        blogs = await Blog.find()
    } catch (error) {
        return console.log(error)
    }
    if(!blogs){
        return res.status.json({ message: "No blogs found" })
    }
    return res.status(200).json({ blogs })
}

export const addBlog = async (req, res, next)=>{
      const { title, description, image, user } = req.body
      const blog = new Blog ({
        title,
        description,
        image,
        user
      })
      try {
          await blog.save()
      } catch (error) {
        return console.log(error)
      }
      return res.status(201).json({ blog })
}