import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
const app = express()
import connectDB from './DB/connectDB.js';
import router from './routes/userRoutes.js';
import blogRouter from './routes/blogRoutes.js';
connectDB(process.env.DB_URL);

app.use(express.json())
app.use('/api/user', router)
app.use('/api/blog', blogRouter)

app.listen(5000, ()=>{
    console.log('server started')
})