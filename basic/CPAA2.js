//CALLBACKS,PRMOISES,ASYN,AWAIT -2

//using nested callbacks make the code difficult to understand.

//Even though callback nesting "works" for order, it’s called callback hell because the code becomes messy, unmaintainable, and painful to manage for large flows.

function getdata(data){
    setTimeout(()=>{
        console.log("data",data);
    },2000)
}

getdata(1);
getdata(2);
getdata(3); //Jab pehla setTimeout chala, vo delay me chala gaya aur turant doosra aur teesra bhi schedule ho gaye — isliye teeno ka delay ek sath khatam hua aur teeno output ek saath aaye."

//concept of nested loops ->Non-nested async tasks apne-apne delay ke according alag-alag time pe chalte hain, lekin nested async tasks me pehle wala task complete hoga tabhi next start hoga — isliye ye sequence me chalte hain, ek ke baad ek.
//Asynchronous code ko agar nested ya chained karein, to execution ek ke baad ek hoti hai — jisse woh synchronous jaisi feel hoti hai.

//nested callbacks-->

function getdata1(dataId,getnextdata){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getnextdata){
            getnextdata();
        }
        
    },2000)
}

//Nested callbacks (callbacks chain)
getdata1(1,()=>{
    console.log("getting data 2");
    getdata1(2,()=>{
        console.log("getting data 2");
        getdata1(3,()=>{
            console.log("getting data 3")
            getdata1(4);
        });
    });
});
//Ab jaise isne data pass nahi kiya 3 ke baad... to error aa jata... us error ko avoid karne ke liye humne if lagaya

