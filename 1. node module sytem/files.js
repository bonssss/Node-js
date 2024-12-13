const fs = require('fs')

// var file= fs.readdirSync('./')
//  console.log(file)

 fs.readdir('./', function(err, files)
{
    if (err){
        console.log('error' + err)
    }
    else
    {
        console.log('file ' + files)
    }
})

 