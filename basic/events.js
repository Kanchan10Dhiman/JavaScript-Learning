let btn=document.querySelector(".btn1");
//access event
btn.onclick=()=>{
    alert("i am js btn");
}

let divm=document.querySelector(".div2");
divm.onmouseover=()=>{
    console.log("inside div2");
    alert("hovered on div 2"); 
}
//priority js handle code ko milegi rather than html inline handle event code.

//never write same code again ..coz piche vala overwrite hojayega.


//EVENT OBJECT
let btnn=document.querySelector(".btn2");
// btnn.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type,e.target);
//     console.log(e.target);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }

//EVENT LISTENERS
btnn.addEventListener("click",()=>{
    console.log("btn2 clicked");
});
btnn.addEventListener("click",(e)=>{
    console.log("btn2 clicked firse");
    console.log(e.type);
});

//removeEventListeners

// let btn3=document.querySelector(".btn3");

// btn3.addEventListener("click", function () {
//   console.log("Hello!");
// });

// btn3.removeEventListener("click", function () {
//   console.log("Hello!");
// });
// //👀 Yeh dono function () { console.log("Hello!"); } dikhte same hain
// // ❌ But: Ye 2 alag memory locations pe stored hote hain
// // 👉 Isliye removeEventListener kaam nahi karta

// function greet() {
//   console.log("Hello!");
// }

// btn3.addEventListener("click", greet);
// btn3.removeEventListener("click", greet);



let btn3=document.querySelector(".btn3");
const button=()=>{
    console.log("hello");
}

btn3.addEventListener("click",button);
btn3.removeEventListener("click",button);

//practice question
let currmode="light";
let togglebtn=document.querySelector(".toggle");
togglebtn.addEventListener("click",()=>{
    if(currmode=="light"){
        currmode="dark";
        // document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("dark");
    }
    else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";//ye to hmne css lgadi isme..hum class list use krke b kr skte h 

    }
    console.log(currmode);
});



