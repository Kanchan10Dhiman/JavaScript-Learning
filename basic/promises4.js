//ASYNC AWAIT is better than  >> promise chain >> callback hell 
/*1. Async Function
-->async function always returns a promise.
-->async keyword lagane se function always ek Promise return karta hai.

-->Even agar tum return "hello" likho, wo automatically Promise.resolve("hello") ban jayega.
*/

//ASYNC-AWAIT easy bnata h asynchronus programming ko.
//await ka matlab hota hai: “ruko jab tak Promise resolve/reject nahi hota
//await ko hum asyn k andr hi use krte h 
/*
🔹AWAIT ASYNC KE ANDAR HI KYUN?

⚡Reason:
JavaScript synchronous single-threaded hai. Agar tum await ko normal function me allow kar dete → pura program block ho jata (freeze ho jata).

Isliye:

JS ne rule banaya → await sirf async function ke andar hi chalega.

Aur jab tum async lagate ho → vo function automatically Promise return karta hai, jo asynchronous handling ko safe banata hai.

👉 Matlab async function ek box hai jo JavaScript ko batata hai:
"Iske andar agar koi await mile, to code pause karna allowed hai, aur main event loop block nahi hoga."

AWAIT SIRF ASYNC FUNCTION KE ANDAR HI CHALTA HAI KYUNKI JAVASCRIPT KO YE BATANA ZARURI HAI KI FUNCTION PROMISE RETURN KAREGA.
AGAR NORMAL FUNCTION ME AWAIT ALLOW KAR DIYA JAYE TO PURE PROGRAM BLOCK HO JAYEGA KYUNKI JAVASCRIPT SINGLE-THREADED HAI.
ISILIYE RULE BANAYA GAYA HAI: "AWAIT CAN ONLY BE USED INSIDE ASYNC FUNCTIONS" TAaki CODE PAUSE TO HO LEKIN EVENT LOOP BLOCK NA HO.
*/

async function hello(){
    console.log("hello");
}

//await us pure async function ko rok deta hai usi line par jaha await aaya hai, jab tak us promise ka result nahi milta.

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data show");
        resolve(200);
        },2000);
    });
}

async function getdata(){
    await(api);// 1st call
    await(api);
    
}




