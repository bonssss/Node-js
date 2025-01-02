const { date, string, required } = require('joi')
const mongoose =require('mongoose')


mongoose.connect('mongodb://localhost:27017/demo')
.then(()=> console.log(" mongodb connected"))
.catch((err)=>console.log('error occured', err))

const genreSchema = mongoose.Schema({
    genre:{type:String, required:true},
    category : {type:String , required:true, enum :['we','they','he']},
    title:String,
    artist:String,
    date: {type:Date, default:Date.now},
    isreleased : Boolean,
    price :{
        type:Number,
        min:0,
        max:100,
        get : v=> Math.round(v),
        set:v => Math.round(v)

    }
})

const Genre = mongoose.model('Genre',genreSchema)
async function Creategenre(params) {
    const genre = new Genre({
        genre: 'horror',
        category: 'they',
        title: 'rock music',
        artist: 'john',
        isreleased: true,
        price: 12.5
        })
    
        try{
     const result = await genre.save()
     console.log(result)  
        }catch(err){
            // console.log(err.message)
            
           

            for (field in err.errors){
                console.log(err.errors[field])

            }
        }
}

// Creategenre();


// async function getGenre(params) {

//     const getgenre = await Genre.find({genre:'rock'})
//     // .limit(4)
//     // .sort({title:1})

//     console.log(getgenre)
    
// }

// logical operators

// async function logicalop(params) {
//     const result = await Genre.find()
//     .or([{genre:"rock"},{artist:"john"}])

//     console.log(result)

    
// }

// getGenre()
// logicalop()

// async function regularexp(params) {

//     /// starts with ro
//     // const result = await Genre.find({genre:/^ro/})

//     // ends with ck
//     // const result = await Genre.find({genre:/ck$/})


//     // cobntains the word r 

//     const result = await Genre.find({genre:/.*R.*/i}).countDocuments()
  
 

//     console.log(result)
    
    
// }

Creategenre()