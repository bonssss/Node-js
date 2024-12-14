const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/contact',(req,res)=>{
    res.send([1,3,5])
})
app.get('/about',(req,res)=>{
    res.send('This is about page')
})

const port =process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})