//PROMISE CHAINI
/*
Promise chaining is the process of executing multiple asynchronous operations in sequence, where the output of one .then() becomes the input for the next.
It helps avoid callback hell by writing cleaner, more readable code, and each .then() returns a new promise, allowing us to keep chaining further steps.
*/


function asyncfunc1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success1");
        },4000);
    });
}
console.log("fetch data1");
let p1=asyncfunc1();
p1.then((res)=>{
    console.log(res);
});

function asyncfunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success2");
        },4000);
    });
}
console.log("fetch data2");
let p2=asyncfunc2();
p1.then((res)=>{
    console.log(res);
});