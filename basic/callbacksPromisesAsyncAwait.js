//ASYNCHRONOUS PROGRAMMING
function hello(){
    console.log("hi one");
}
//setTimeout(func, delay);

//setTimeout() is used to delay the execution of a function by a given number of milliseconds (1 second = 1000 ms).
//setTimeout() always expects a function as its first argument.


setTimeout(hello,4000)//after how much time it should executed

//or
setTimeout(()=>{
  console.log("hello two")
},6000);

