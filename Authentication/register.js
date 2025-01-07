const express =require('express')
const mongoose = require('mongoose')
const Joi = require('joi')
const dotenv = require('dotenv')

const userRouter = require('./routes/auth')
dotenv.config()

const app = express()
app.use(express.json())
app.use('', userRouter);


mongoose.connect('mongodb://localhost:27017/user')
.then(() => console.log('Connected to MongoDB...'))

.catch(err => console.log(err))

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
