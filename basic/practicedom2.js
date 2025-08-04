//q1 insert the element as first element inseide the body tag
let button1=document.createElement("button");
button1.innerText="click me";
button1.style.backgroundColor="red";
button1.style.textColor="white";

let el=document.querySelector("body");
el.prepend(button1);


//q2 
let p=document.querySelector("para");
p.getAttribute("class");
p.setAttribute("class","new.class")// ye property class ko overwrite kr deti h..but i want ki purani class b rhe so we use class list



