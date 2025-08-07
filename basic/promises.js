//PROMISES-->to overcome callback hell
let promise1= new Promise((resolve,reject)=>{
    console.log("i am promise");
    //resolve("succesfully resolved");
    reject("some erroe occurred");
})
