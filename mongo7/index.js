const { date } = require('joi')
const mongoose =require('mongoose')


mongoose.connect('mongodb://localhost:27017/demo')
.then(()=> console.log(" mongodb connected"))
.catch((err)=>console.log('error occured', err))

const genreSchema = mongoose.Schema({
    genre:String,
    title:String,
    artist:String,
    date: {type:Date, default:Date.now},
    isreleased : Boolean
})

const Genre = mongoose.model('Genre',genreSchema)
async function Creategenre(params) {
    const genre = new Genre({
        genre: 'horror',
        title: 'rock music',
        artist: 'john',
        isreleased: true
        })
    
     const result = await genre.save()
     console.log(result)  
}

// Creategenre();


async function getGenre(params) {

    const getgenre = await Genre.find({genre:'horror'})
    .limit(4)
    .sort({title:1})

    console.log(getgenre)
    
}

getGenre()