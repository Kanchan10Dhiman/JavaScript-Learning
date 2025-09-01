//API->appliaction programming interface
/*
API is a bridge between two systems.
GET → Read
POST → Create
PUT → Update (whole)
PATCH → Update (part)
DELETE → Remove
Most important for us = Web APIs (REST, GraphQL, SOAP, gRPC).

JavaScript me APIs call karne ke liye Fetch API ya Axios use hota hai.
  -->fetch returns a promise*/
const url="https://catfact.ninja/facts";
const para= document.querySelector(".para");
// let promise=fetch(url);
// console.log(promise);

// to get result from the promise
const getdata=async()=>{
  console.log("getting data..")
  let response=await fetch(url);
  console.log(response);//json format
  let data=await response.json();
  // console.log(data);
  para.innerText=data[0].text;

}
//json() methodse hum apna actual daat nikalte h js object k through
/*
AJAX → Asynchronous JS & XML
JSON → JavaScript Object Notation
json() method → returns a second promise that resolves with the result of parsing the response body text as JSON.
(Input is JSON, output is JS object)
 */
