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

export const updateBlog = async (req, res, next)=>{
    const { title, description } = req.body
    let blogId = req.params.id
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(blogId, {
            title,
            description
          })
    } catch (error) {
        console.log(error)
    }
    if(!blog){
        return res.status(500).json({ message: "Unable to update the blog" })
    }
    return res.status(200).json({ blog })
}

export const getById = async (req, res, next)=>{
     const id = req.params.id
     let blog;
     try {
        blog = await Blog.findById(id)
     } catch (error) {
        return console.log(error)
     }
     if(!blog){
        return res.status(404).json({ message: "Blog not found" })
     }
     return res.status(200).json({ blog })
}

export const deleteBlog = async (req, res, next)=>{
    const id = req.params.id
    let blog
    try {
        blog = await Blog.findByIdAndRemove(id)
    } catch (error) {
        console.log(error)
    }
    if(!blog){
        return res.status(500).json({ message: "Unable to delete" })
    }
    return res.status(200).json({ message: " Successfully Deleted" })
}