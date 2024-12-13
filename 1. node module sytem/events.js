const EventEmitter = require('events')
const { url } = require('inspector')
const events = new EventEmitter()
//event listener
events.on('Event emmitted', function(arg)
{
    console.log('event listened',arg)
})

// event creatted
events.emit('Event emmitted',{id:1,url: 'www.nons.com'})


// events.on('this', function(){
//     console.log('this is listener')
// })

// events.emit("this")

events.on('logging',(arg)=>
{
    console.log('logging',arg)
})
events.emit('logging',{data:'hello am the data'})

