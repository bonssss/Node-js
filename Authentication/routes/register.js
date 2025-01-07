const express = require('express')
const app = express()
app.use(express.json())
const router = express.Router()
const {User} = require('../model/reduser')
const _ =require('lodash')
const bcrypt = require('bcrypt')

router.post('/api/register',async (req,res)=>{
   

    const {name,email,password} = req.body
    const user = new User({
        name:name,
        email:email,
        password:password
        })
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
        user.save()
        .then(data => {
            res.send( _.pick(user,['id','name','password']))
           
            })
            .catch(err => {
                res.json({message:err.message})
                })

                    



})
module.exports= router