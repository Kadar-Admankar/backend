import mongoose from "mongoose";

const connectDB = async (DB_URL)=>{
    try {
        const DB_OPTIONS = {
            dbName : 'Social-Media'
         }
         await mongoose.connect(DB_URL, DB_OPTIONS)
         console.log("connected to DB")
    } catch (error) {
        console.log("db connection error", error)
    }
         
}

export default connectDB;