const express =require('express')
const mongoose = require('mongoose')
const Joi = require('joi')
const userRouter = require('./routes/register')

const app = express()
app.use(express.json())
app.use('', userRouter);


mongoose.connect('mongodb://localhost:27017/user')
.then(() => console.log('Connected to MongoDB...'))

.catch(err => console.log(err))

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
