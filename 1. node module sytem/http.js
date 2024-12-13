const http = require('http')
const { url } = require('inspector')

const server = http.createServer((req,res)=>
{
    if (req.url=='/'){
        res.write("hello server")
    res.end()
    }

    

    if(req.url=='/api/contact'){
        res.write("this is contact")
        res.write(JSON.stringify([1,2,34,5]))
    res.end()


}}
)

// server.on('connection',(socket)=>{
//     console.log("connection created")
// })
server.listen(3000)

console.log("server running in 3000")