//PROMISE CHAINI
/*
Promise chaining is the process of executing multiple asynchronous operations in sequence, where the output of one .then() becomes the input for the next.
It helps avoid callback hell by writing cleaner, more readable code, and each .then() returns a new promise, allowing us to keep chaining further steps.
*/

function asyncfunction(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data");
            resolve("successfully done");
        },4000);
    });
}

let p1=asyncfunction();
p1.then((res)=>{
    console.log(res);
});