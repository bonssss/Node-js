const config =require('config')
const express = require('express')
const morgan= require('morgan')
const app = express()
const logger =require('./middleware')
const { log } = require('console')

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
// console.log(`app:${app.get('env')}`);

app.use(express.json())
// app.use(morgan('tiny'))

app.use(express.static('public'));

console.log("App name: " + config.get('name'))
console,log("Description: " + config.get('mail.host'))

app.use(logger)

if(app.get('env') == "development")
{
  app.use(morgan('tiny'))  
  console.log("Morgan is enabled")
}
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