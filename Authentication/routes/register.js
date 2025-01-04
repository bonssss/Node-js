const express = require('express')
const app = express()
app.use(express.json())
const router = express.Router()
const {User} = require('../model/reduser')

router.post('/api/register',async (req,res)=>{
   

    const {name,email,password} = req.body
    const user = new User({
        name:name,
        email:email,
        password:password
        })
        user.save()
        .then(data => {
            res.json(data)
            })
            .catch(err => {
                res.json({message:err.message})
                })

                    



})
module.exports= router