console.log("First")

 Settime(1,function(user){
    console.log("new" , user)
 })

 repo().then((username)=>{
    console.log("second pro",username)
 })

//  repo( (username)=>{
//     console.log("Second user" , username)
//  })

console.log("Second");

function Settime(id,callback){
    setTimeout(() => {
        console.log("wait for the seconds")
        callback({id:id , name:"bonsss"})
        // return {id:id , name:"bonsss"}
    }, 2000);
}


function repo(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("repo called")
            resolve(['repo1','repo2','repo3'])
            
        }, 200);
    })
    
}
