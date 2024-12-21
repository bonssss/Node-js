
const p1 = new Promise((resolve)=>{
    setTimeout(() => {
        console.log("p1 is running")
        resolve('p1 resolved')
        }, 2000);
        });
        // p1.then((result)=>{
        //     console.log(result);
        //     return 'p1 then resolved';
        //     }).then((result)=>{
        //         console.log(result);
               

const p2 = new Promise((resolve)=>{
    setTimeout(() => {
        console.log("ps is running");
        
        resolve('p2 resolved')
        }, 2000);
        });

Promise.all([p1,p2])
.then(result=>console.log(result))