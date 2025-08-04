//access and change attributes
let divi=document.querySelector("#div1");
console.dir(divi);

let val=divi.getAttribute("id");// if i write #div1  the value in console is null
console.dir(val);

let v=divi.getAttribute("name");
console.dir(v);//here ve gpt the value of the attribute

let vi=document.querySelector("p");
let b=vi.getAttribute("class");
console.dir(b);


let c=vi.setAttribute("class","223");
console.dir(c);

//access and change style 

let st=document.querySelector("div");
st.style.backgroundColor="yellow";
st.style.backgroundColor="purple";
//st.style.width="40px";
st.style.fontSize="40px";
st.innerText="hello ji";
st.style.visibility="hidden";