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