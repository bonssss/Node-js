const { required } = require('joi')
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type:String,
        unique: true,
        required:true
    },
    password: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;