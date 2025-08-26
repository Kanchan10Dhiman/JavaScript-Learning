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
        },3000);
    });
}

async function getdata(){
    await api();// 1st call
    await api();

}
function getdata1(dataId){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("data",dataId);
        resolve("200");
        
     },5000)
    });
}
async function getalldata(){ //code easy  ye pomises or callbacsk se
  await getdata1(1);
  console.log("got data1");
  await getdata1(2);
  console.log("got data2");
  await getdata1(3);
  console.log("got data3");

}
// getdata1(1).then(res => console.log("Promise fulfilled with:", res));    just to see ki promise fulfil hogya kya vo b apni ankho se dekhne k liy

//so we can use both async-await or .then() and catch()...but jha async -await use hora vha .then and .catch use nhi krenge and vice  versa
//jo async-await hote h usko function me dalna pdta h fr use call krte h ..

//Agar async function banaya hai to usko call (getData()) manually likhne ki jrurt na pade — vo apne aap hi execute ho jaye.---yha manually call krne ko unnecessary call krna kehre h---to iske liy jo solution vo h ..
//Immediately Invoked Function Expression--IIFE me function ko define karte hi turant call kar dete hain.
//IIFE = function ko define karo + turant execute karo.
//Async IIFE = async function + auto execution → bina “unnecessary call”.--jada use ni krte IIFS ye advance js ka part h--ek hi bar use kr skte h dobara use krne k liy frse likhana pdega..bs yeh ki bian call kiye execute ho jata h bs 

(async function(){ //code easy  ye pomises or callbacsk se
  await getdata1(1);
  console.log("got data1");
  await getdata1(2);
  console.log("got data2");
  await getdata1(3);
  console.log("got data3");

})();




