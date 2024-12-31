const pro = new Promise((resolve,reject)=>
    {
        console.log(resolve("This is correct"))
    })


pro.then(result => console.log(result))
