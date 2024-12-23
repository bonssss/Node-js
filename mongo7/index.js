const mongoose =require('mongoose')


mongoose.connect('mongodb://localhost/demo')
.then(()=> console.log(" mongodb connected"))
.catch((err)=>console.log('error occured', err))