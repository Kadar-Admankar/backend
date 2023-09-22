import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
const app = express()
import connectDB from './DB/connectDB.js';

import router from './routes/userRooutes.js';
connectDB(process.env.DB_URL);
// app.use('/api', (req, res, next)=>{
//      res.send('Hello World')
// })
app.use('/api/user', router)

app.listen(5000, ()=>{
    console.log('server started')
})