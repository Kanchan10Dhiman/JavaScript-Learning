//Objects
let student={
    fullname:"kanchn",
    marks:22,
    printmarks : function(){
        console.log("marks=", this.marks);
        //console.log("marks=", student.marks);
    }
};

let arr=["apple","mango","lichi"];
console.log(arr);

let employee={
    caltax(){
        console.log("tax rat eis 10%")
    }
};

const karan={
    salary :5000,
}
karan.__proto__=employee;

//if we have many employees than no need to write the function again and again..use proto for acess caltax function in common
const karan1={
    salary :53000,
}
const karan2={
    salary :1000,
}
const karan3={
    salary :9000,
}
const karan4={
    salary :9000,
    caltax(){//if object and prototype havesame method, object's method will be used.
        console.log("tax is 20%");
    }
}
karan1.__proto__=employee;
karan2.__proto__=employee;
karan3.__proto__=employee;
karan4.__proto__=employee;

//CLASses
class car{
    constructor(brand){
        console.log("excuted as object created");
        this.brand=brand;

    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop")
    }
    // setBrand(brand){
    //     this.brandName=brand;//this k sath object ki property h or =brand vhi h jo as a arguement passed h
    // }
};

let fortuner= new car("fortuner");
// fortuner.setBrand("fortuner");
let maruti=new car();


//Inheritance
class parent{
    hello(){
        console.log("hello");
    }
}
class child extends parent{}
let obj= new child();
//example
class person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
// class engineer{
//     work(){
//         console.log("solve problem amd work")
//     }
// }
class engineer extends person{
    work(){
        console.log("solve problem amd work")
    }
}
let obj2=new engineer();
// obj2.engineer() no allowed --methods must be called explicitly using object.methodName().
//Function ko jab object ya class ke sath jod diya jaye, to wo method ban jata h
/*
--------------------------------
 1. Function
Jab koi block of code class/object ke bahar likha ho.

js
Copy
Edit
function greet() {
    console.log("Hello!");

    }
    -------------------------------
2. Method
Jab koi function object ya class ke andar likha ho, us object/class ka hissa ban jata hai — to use method kehte hain.

js
Copy
Edit
class Person {
    greet() {
        console.log("Hello!");
    }
}
Yahaan greet() class ke andar hai, aur jab hum let p = new Person(); karte hain, to p.greet() ka matlab hai:

🔹 “Method call on object p.”
-----------------------------------------
✅ JavaScript Syntax ke Hisab se:
Function declaration (outside object):

function greet() { ... }  // ✅ function
Method declaration (inside object or class):
let obj = {
    greet() { ... }   // ✅ method
};
Or:
class Person {
    greet() { ... }   // ✅ method
}
Even though syntax same lagta hai, JavaScript engine samajhta hai ki:

Agar function object/class ke andar hai, to ye method hai

Agar bahar hai, to function hai
----------------------------------------------
✅ 1. greet() as a FUNCTION (outside class)
js
Copy
Edit
function greet() {
    console.log("Hello from Function");
}

greet();  // ✅ called directly — function
🧠 Yahaan greet() is just a function, kyunki ye class ya object ke andar nahi hai.

✅ 2. greet() as a METHOD (inside class)
js
Copy
Edit
class Person {
    greet() {
        console.log("Hello from Method");
    }
}

let p = new Person();
p.greet();  // ✅ called on object — method
🧠 Yahaan same naam greet() hai, lekin ye class ke andar hai — so ye method hai.

📌 Visual Flow:
javascript
Copy
Edit
JS Engine dekhta hai:

1. function greet() { ... }  
   → Yeh kahin ke andar nahi = ✅ FUNCTION

2. class Person {
       greet() { ... }
   }
   → Yeh class ke andar = ✅ METHOD
🧠 Final Golden Line (Notes ke liye):
"In JavaScript, if a function is defined inside a class or object, it's called a method.
If it’s defined outside, it's just a function."
*/


