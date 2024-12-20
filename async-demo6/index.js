console.log("First")

 Settime(1,function(user){
    console.log("Second user" , user)
 })

 repo(1, (username)=>{
    console.log("Second user" , username)
 })

console.log("Second");

function Settime(id,callback){
    setTimeout(() => {
        console.log("wait for the seconds")
        callback({id:id , name:"bonsss"})
        // return {id:id , name:"bonsss"}
    }, 2000);
}


function repo(username,callback){
    setTimeout(() => {
        console.log("repo called")
        callback (['repo1','repo2','repo3'])
        
    }, 200);
}
// setTimeout(() => {
//     console.log("wait for 0.2 sec");
    
    
// }, 2000);