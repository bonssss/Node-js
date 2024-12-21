
const p = new Promise((resolve,reject)=>{

    // resolve(1) // when every thing is correct
    reject(new Error('message'))
})
p.then((result)=>{
    console.log('Thae vaklue is: ',result)
}).catch((error)=>{
    console.log('Error: ',error.message)
})