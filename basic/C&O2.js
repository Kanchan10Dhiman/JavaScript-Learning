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

    constructor(){
        this.species="homophones";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }

    work(){
        console.log("parent class''s function");
    }
}
// class engineer{
//     work(){
//         console.log("parent class ka mehod")
//     }
// }
class engineer extends person{
    work(){
        console.log("solve problem amd work");
        console.log("child's class function");//priority=child class function, if the function is same in parent and child's class like work(),then child's class functiom will be printed---Method overriding((child class=derived class))

        //definition--When a child class (derived class) defines a method with the same name as one in its parent class, it overrides the parent's version.


    }
}
let obj2=new engineer();

//example
class doctor extends person
{
    doctorwork(){
        console.log("i am doctor");
    }
}
let obj3=new doctor();

//SUPER KEYWORD
//super is a keyword used to access the parent class’s constructor or methods from the child class.

class person1{
    constructor(){
        console.log("parent constrcutor");
        this.species="hoho";
    }
    eat(){
        console.log("eat");
    }
}

class engineer2 extends person1{
    constructor(branch){
        console.log("child constrcutor");
        super();
        this.branch=branch;
         console.log("exit child constrcutor");
    }
    work(){
        super.eat();//called parent's class method//eat() give error undefined...so it is important to use super to acess the method of parent class//eat \n work of engg2
        console.log("work of engg2")
    }
}
let obj5=new engineer2("cse");

//passing arguemnt to super
class person2{
    constructor(name){
        this.species="hihi";
        this.name=name;
    }
    eat(){
        console.log("eat");
    }
}

class engineer3 extends person2{
    constructor(name){
        super(name);
    }
    work(){
        console.log("work of engg2")
    }
}
let obj6=new engineer3("namee--kanchan");


//PRACTICE Q/A
/*Q1. You are creating a website for your college.
Create a class User with 2 properties, name & email.
It also has a method called viewData() that allows user to view website data.

Q2. Create a new class called Admin which inherits from User.
Add a new method called editData() to Admin that allows it to edit website data.*/

//Without Constructor:Tumhe har object banane ke baad manually name() aur email() call karne padte.

//1.
let data="hello data";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data=",data)
    }
}
let student1=new User("kanchan","abc@gmail.com");
let student2=new User("kajl","jhk@gmail.com");

//2.
class admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        data="changed new value of dtaa";
        console.log(data);
    }
}
/*Final Notes:
Agar User me constructor bana ho, to admin me bhi constructor() banana zaroori hai agar tum kuch pass kar rahi ho.

super(name, email) likhna mandatory hota hai constructor ke andar. */
let admin1=new admin("kanchan","jj@gmail.com");


//A DIFFERENT TOPIC--ERROR HANDLING
let a=2,b=2;
console.log("a+b",a+b);
console.log("a+b",a+b);
// console.log("a+b",a+c);
//try catch block use krke error print ho jata h handle ho jata h or bs main ye h ki execution rukti nhi h
try{
    console.log("a+b",a+c);
}catch(err){
    console.log(err);
}
console.log("a+b",a+b);








