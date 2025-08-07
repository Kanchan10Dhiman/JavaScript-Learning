//PROMISES-->to overcome callback hell
let promise1= new Promise((resolve,reject)=>{
    console.log("i am promise");
    //resolve("succesfully resolved");
    reject("some erroe occurred");
})

// API direct data return nahi karti, Promise return karti hai.Kyunki data turant available nahi hota, wo future mein milega.API ko server se connect karna padta hai.Internet delay, server response ka wait, etc. JavaScript can’t wait — it gives you a Promise that "data lekr aa rha hi hu m".

function getdata1(dataId,getnextdata){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        //console.log("data",dataId);
        reject ("rejected");
        if(getnextdata){
            getnextdata();
        }
        
     },3000)
    });
}
let promise= getdata1(123);
// let promise= getdata1(123,()=>{
//     getdata(2); 
// });


