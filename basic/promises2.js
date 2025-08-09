//.then (resolve)& .catch(error)
const getpromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise1");
        resolve("successful");
         //reject("network error");

    });
};

let promise=getpromise();
promise.then((res)=>{ //res vo msg h jo hmne resolve me dala h.
    console.log("promise fullfilled",res);
});

promise.catch((err)=>{//err vo msg h jo hmne reject me dala h.
    console.log("error is there ",err);
})
/*
.then() handles a Promise when it is successfully executed and gives access to the resolved value.
.catch() handles a Promise when it fails and gives access to the error.

We pass a parameter in .then() or .catch() so that we can receive the value given to resolve() or reject() inside the Promise.
This allows us to access and display the success message or error message returned by the Promise.
*/