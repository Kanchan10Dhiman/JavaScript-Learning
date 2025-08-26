//API->appliaction programming interface
/*
API is a bridge between two systems.

Most important for us = Web APIs (REST, GraphQL, SOAP, gRPC).

JavaScript me APIs call karne ke liye Fetch API ya Axios use hota hai.
  -->fetch returns a promise*/
const url="https://alexwohlbruck.github.io/cat-facts/docs/endpoints/facts.html";

// let promise=fetch(url);
// console.log(promise);

// to get result from the promise
const getdata=async()=>{
  console.log("getting data..")
  let response=await fetch(url);
  console.log(response.status);
}

/*
AJAX → Asynchronous JS & XML
JSON → JavaScript Object Notation
json() method → returns a second promise that resolves with the result of parsing the response body text as JSON.
(Input is JSON, output is JS object)
 */
