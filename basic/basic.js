/*
//console.log("helo'");
fullName="aman";
age=24;
price=45.87;
x=null //typeof x  'object'
y=undefined
isFollow=true//boolean 
namee=8

fullName=65 //dynamically typed we dont need to tell which data type we are storing
typeof fullName
'number' 
console.log(fullName);

//variable rules
bn_7=9
_hi=9
$re=0
num1=7
num2=6
//234fre=0 wrong 
//console=87;
//console.log(console)  generate error as console is keyword
Console=9; //valid

let a;
console.log(a)
constant has to initialise value const a=10;

datatypes-> 
primitive--> number,string,boolean.undefined,null,bigInt,symbol-->used ro create unique identifiers
non-primitve-->objets functions,arrays

symbols 
let a = Symbol("hi");
let b = Symbol("hi");

console.log(a === b); // false (they are different)
Avoid name conflicts in object properties.

Add hidden properties that won’t accidentally interfere with other code.

let c=BigInt("234") //234n-> when we print bigint there is n in last of number.
let d=Symbol("hi")//Symbol(hi)  typeof d  'symbol'
*/


//object-->stores key:value pairs
const student={
    fullName: "kanchan",
    age: 19,
    cgpa:8.13,
    isPass: true,

};//type of student 'object'

//acessing 
console.log(student);
console.log(student["age"]);
console.log(student.fullName);
//chnage value 
student["age"]=student["age"]+1;
console.log(student["age"])

student["fullName"]="kanchan dhiman";

/*const student={
    fullName: "anam";
    isPass: true,

}; it will  give error coz student is already declared in const.*/

const me={
    fullName: "kanchan",
    age: 19,
    cgpa: 7,
    isPass: true,

};// object should be different ..key values not mttr as they are inside the block.
 me["isPass"]=false;

 const product={
    title:"pen",
    price: 90,
    isdeal:true,
    offer:7,
};

 const profile={
    username: "kanchn ",
    followers: 876,
    following: 990,
    isfollow:true,

};

let num=prompt("enter no :");
 if(num%5==0){
    console.log(num ,"multiple of 5");
}else
 console.log("not multiple of 5");