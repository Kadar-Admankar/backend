import bcrypt from 'bcrypt'
import User from "../models/User.js";

export const getAllUser = async (req, res, next)=>{
    let users;
    try {
        users = await User.find()
    } catch (error) {
        console.log(error)
    }
   if(!users){
    return res.status(404).json({ message: "No Users Found" });   // 404 - unauthorized
   }
   return res.status(200).json({ users })   // 200 - OK
}

export const signUp = async (req, res, next)=>{
    const { name, email, password } = req.body
    let existUser
    try {
        existUser = await User.findOne({email})
    } catch (error) {
        console.log(error)
    }
    if(existUser){
        return res.status(404).json({message: "User Already exist..! Login instead"})  // 404 - unauthorized
    }
    const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(password, salt)
    const user = new User({
        name,
        email,
        password : hashedPassword
    })
    try {
        await user.save()
    } catch (error) {
        console.log(error)
    }
    return res.status(201).json({ user })  // 201 - created
}