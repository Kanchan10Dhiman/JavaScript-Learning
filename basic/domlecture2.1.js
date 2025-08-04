//insert element--  1.create 2.add
let el=document.createElement("button");
el.innerText="click here";
console.dir(el);

let divi=document.querySelector("div");
divi.append(el);
divi.prepend(el);
divi.before(el);
divi.after(el);
//div.remove(el); yha div hi ud gya agr ye krte h
el.remove();

//lets try to add a para 
let el1=document.createElement("p");
el1.innerText="hi i am here";
//console.dir(el1);

let para=document.querySelector("p");
para.append(el1);

//lets try to add a heading 


let el2=document.createElement("h1");
el2.innerText="Kanchan";
console.dir(el2)
document.querySelector("body").prepend(el2);
//document.querySelector("body").before(el2);

/*Sir/Ma'am, technically we can insert elements before the <body> using .before(), but it is not recommended.
Elements outside the <body> tag might still render in the browser due to its auto-correction behavior, but they don't follow HTML standards.

To keep the structure valid and clean, we should always insert elements within the <body> using .append(), .prepend(), or similar methods.

It also helps avoid unexpected issues with rendering, browser compatibility, or when working with libraries like React or frameworks like Angular."

*/

//let do some practice question

