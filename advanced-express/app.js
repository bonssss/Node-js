const express = require('express')
const app = express()
const logger =require('./middleware')
app.use(express.json())

app.use(logger)

app.use(function(req,res,next){
    console.log('Time:',new Date().toISOString())
    next()

})

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.listen(3000,()=>{
    console.log('server is running on port 3000')
})