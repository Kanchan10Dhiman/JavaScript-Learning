//CALLBACKS,PRMOISES,ASYN,AWAIT -1

//ASYNCHRONOUS PROGRAMMING
function hello(){
    console.log("hi one");
}
//setTimeout(func, delay);

//setTimeout() is used to delay the execution of a function by a given number of milliseconds (1 second = 1000 ms).
//setTimeout() always expects a function as its first argument. //SetTime callback leta h as a function.


setTimeout(hello,4000)//after how much time it should executed

//or
setTimeout(()=>{
  console.log("hello two")
},6000);


//------------------------------------------

//CALLBACKS=>
//A callback is a function passed as an arguement to another function.

//()isliye nahi lagate kyunki vo to result ke liye hoti hai, ki humne function call kara aur vo kuch kaam karke return karega... hume to function ko hi pass karna hai ki vo wahan jaake jo karna hai kare, isliye()` nahi lagate."

function sum(a,b){
  console.log(a+b);
}

function cal(a,b,sumcalculate){
  sumcalculate(a,b);
}

 // cal(1,2,sum);
cal(1,2,(a,b)=>{
   console.log(a+b);
});

const hi=()=>{
  console.log("hi buddy");
}
setTimeout(hi,3000);

//using nested callbacks it could difficult to handle the code.

