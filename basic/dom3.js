// let divclass=document.querySelector(".div");

// divclass.innerText="changed";
// console.dir(divclass);

let divclass = document.querySelectorAll(".div");

divclass.forEach((item) => {
  item.innerText = "changed";
});


