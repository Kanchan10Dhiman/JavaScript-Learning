//PROMISE CHAINIG
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

function asyncfunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success2");
        },4000);
    });
}
//agr id mila tbi password k loy serch kro tbi promise chain kia h
console.log("fetch data1");
// let p1=asyncfunc1();
//p1.then((res))---
asyncfunc1().then((res)=>{  //isme chaining hori h 
    console.log(res);
    console.log("fetch data2");
    let p2=asyncfunc2();
    p2.then((res)=>{
    console.log(res);
 });

});
// console.log("fetch data2");
// let p2=asyncfunc2();
// p2.then((res)=>{
//     console.log(res);
// });

//promise chain
function getdata(dataId){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("data",dataId);
        resolve("success");
        
     },6000)
    });
}
//ab ye niche vala callbacks se thoda sa thik lgta h dekhne me ..pr fr b messy hojayga jada statements add krne k baad
// let p=getdata(1);
getdata.then((res)=>{
    return getdata(2);//console.log(res);
}).then((res)=>{
   return getdata(3);
}).then ((res)=>{
    console.log("successful chaining")
})
;