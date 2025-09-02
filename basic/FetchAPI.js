//API->appliaction programming interface
/*
API is a bridge between two systems.
//HTTP REQUESTS
GET → Read
POST → Create
PUT → Update (whole)
PATCH → Update (part)
DELETE → Remove
Most important for us = Web APIs (REST, GraphQL, SOAP, gRPC).

JavaScript me APIs call karne ke liye Fetch API ya Axios use hota hai.
  -->fetch returns a promise*/
const url="https://catfact.ninja/fact";
const para= document.querySelector(".para");
const btn=document.querySelector("#btn");

// let promise=fetch(url);
// console.log(promise);

// to get result from the promise
const getfact=async()=>{
  console.log("getting data..")
  let response=await fetch(url);
  console.log(response.status);//json format
  let data=await response.json();
  console.log(data);
  //console.log(data[0]);
  // para.innerText=data[0].text;
  para.innerText = data.fact;
};

btn.addEventListener("click",getfact);
 
//json() methodse hum apna actual daat nikalte h js object k through
/*
//FROMAT TYPES
-->JSON → {"id":1, "name":"Kanchan"}(key-value style)
-->XML → <name>Kanchan</name> (tag-based style)
-->AJAX → depends on what server sends (JSON/XML/text).--its a technique not format

JSON → JavaScript Object Notation
json() method → returns a second promise that resolves with the result of parsing the response body text as JSON.
(Input is JSON, output is JS object)
-->json() ek method h ..isko hum 'response.json()' krke use krte h...iska kaam hota h jb hum data ko fetch () krwate h..to server data ko text form yani jese string format me bhejta h...to hum ye method use rkke usko convert kr dete h js object me taki hum use access kr ske. . ya [] lgake
 */

//upr valr vo hum promise chain se b kr skte h

//THIS WROKS SAME AS ABOVE AWAIT/ASYNC FUNCTION
// function getfacts(){
//   fetch(url).then((response)=>{
//     return response.json();
//   }).then((data)=>{
//     console.log(data);
//     para.innerText = data.fact;
//   })
// }


