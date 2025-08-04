//console.log("hello");
//window.console.log("hello2");//our code JS knows that all these are part of window obects...alert,console.log,etc

//DOM Manipulation
let heading=document.getElementById("heading");//return the value of h1
console.log(heading);// Jab tum dekhna chahati ho ki page me actual tag kaisa dikh raha hai.
console.dir(heading);//Jab tum us element ke andar ke properties dekhna chahti ho (e.g. id, innerText, style, etc.)

let clas=document.getElementsByClassName("class");
console.dir(clas);

let tagy=document.getElementsByTagName("p");
console.dir(tagy);

//query selctor
let elements=document.querySelector("p");
console.dir(elements);//return firt element
let elementsAll=document.querySelectorAll("p");
console.dir(elementsAll);//return node list

let ele=document.querySelectorAll(".class");
console.dir(ele);

let el=document.querySelector("#heading");
console.dir(el);

//tag.name

console.dir(elements.tagName);//p
console.log(elementsAll.tagName);//undefined //coz tagname work on single elemnet not on list
console.log(heading.tagName);//H1

//innertext

let divi=document.querySelector("#divid");
console.dir(divi.innerText);//isko console me b likh k dekhna okiee 

//innerHtml
console.dir(divi.innerHTML); //ye b innerMText ki trh kaam krta h bs ye yha pe tag k sath show kr det ah ..ek bar console me likh k dekhlo.

//jese hmne upr access krna sikha tagname innerhtml,innertext ko...ab yah hmne change kra ..to ese work krta h dom...access+change
divi.innerText="hello innertext change"; 
console.dir(divi.innerText);

//textContent in the dom2.js file

