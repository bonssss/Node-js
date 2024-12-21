const p = Promise.resolve({id:1},()=>{
    
})

p.then((result)=>{
    console.log(result);
    console.log('resolved');
})

const pro = Promise.reject(new Error('reason'));

pro.catch(Error=> console.log(Error))