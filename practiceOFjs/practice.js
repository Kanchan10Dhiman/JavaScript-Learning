console.log("hello ji"); 
//alert('billu');
fullname="kanchan";
console.log(fullname);
x=null;y=undefined;
console.log(x);
console.log(y);
//let var cosnt //ecmascript 6-->6th edition of js released in 2015  -->faetures serch on gpt
let a;
a=34;
//const b; erroe -->has to initialise value
const b=9;
console.log(a,b);

//let and const are block variables
{
    let a=4;
    console.log(a)
}
{
    let a=10;
    console.log(a);
}

/*datatypes-> 
primitive--> number,string,boolean.undefined,null,bigInt,symbol-->used ro create unique identifiers
non-primitve-->objets functions,arrays*/

//objects

const student={
    namee:"knu",
    class:9,
    pass:true,
};


console.log("class",student.class);
//student["class"]=student["class"]+5;
student.class=student.class+5;
console.log(student.class);
console.log(student.pass);

student.namee="kanchan";
console.log(student.namee);
console.log(typeof student.class);


//operators
console.log("operators :-")
let m=3,n="3";
let k=m+n;
console.log(k);
console.log(m*n);//multiply
console.log(m**n);//power
console.log(m^n);
console.log(Math.pow(m,n));

console.log(m==n);//true
console.log(m===n);//false ...itcheck data-type should be equal 
console.log(m!=n)//false 
console.log(m!==n)//true


//conditionals
let num=20;
if(num>10){
    console.log("yes");
}
else{
    console.log("no")
}
let bi=10;
let ci=bi<0? "yes":"no";
console.log(ci);

//input number
//let set=prompt("enter no:");
//console.log(set);

//loops
let i;
for(i=0;i<5;i++){
    console.log("hello");
}
let j=0;
while(j<5){
    console.log("hiiii");
    j++;
}

let str="kanchhan";
for(let i of str ){
    console.log(i);
}

let str1="hello";
let size=0;
for(let i of str1){
    size++;
}
console.log(size);

//for in loop
const person={
    namee:"knu",
    age:4,
    pass:true,
};
for(let i in person){
    console.log(i);
    console.log(person[i]);
};

//let numm=prompt("guess no:");
//let guessnum=23;
/*if(num==guessnum){
    console.log("corect number");
}
else{
    console("try again");
}*/

//while(numm!=guessnum){
  //  numm=prompt("wrong guess")
//}
//console.log("right guess");

//Strings-->immutable
let am=1;
let st1="billlu";
let st2="yaluu";
console.log(st1.length);
console.log(st1[2]);//l

//template literals 
let output=`hello ${st1} billu ji`;
let output1=`hello ${am} billu ji`;
console.log(output);
console.log(output1);

console.log(st1.toUpperCase());
console.log(st1.toLowerCase());
console.log(st1.trim());
console.log(st1.slice(0,3));
console.log(st1.concat(st2));

console.log(st1.charAt(4));
console.log(st1.slice(2));
console.log(st1.replaceAll("lll","dd"));
/*

//create username for website
let username=prompt("enter name");
username='@'+username.toUpperCase()+username.length;
console.log(username);  */


//ARRAY
let arr=[7,6,9,8,6];
console.log(arr.length);
arr[3]=56;
console.log(arr[3]);

for(let i of arr){//access elemnts of array
    console.log(i);
}
console.log("using for loop")

for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let ar=[1,2,3,4,5];
let sum=0;
for(i=0;i<ar.length;i++){
    sum+=i;
}
console.log(`sum of ar= ${sum}`);

//avg 
let ara=[30,23,45,56];
let avg=0;
for(let i of ara){
    avg+=i;

}
console.log(`avg of values of ara= ${avg/ara.length}`);

let items=["hi","bi","ti"];
items.push("hee");
console.log(items);
items.pop();
console.log(items);
console.log(items.toString());//convetd array to string
a1=["hi","hello"];
a2=[9,5 ,6];
a3=["ritu","ditu"]
console.log(a1.concat(a2,a3));//concat multiple arrays
a1.unshift("bilu");
console.log(a1);
//console.log(a1.unshift("bilu"));//return length of array
a1.shift();
console.log(a1);


//FUNCTIONS AND METHODS
console.log("FUNCTIONS");
function printing(msg){
    console.log(msg);
}
let msg="helloioo";
printing(msg);

function add(x,y){
    return c=x+y;
}
let h=3,l=7;
let result=add(h,l);
console.log(result);


console.log("ARROWFUNCTIOn")
//arrow function
const summ=(a,b)=>{
    return a+b;
}
console.log(summ(h,l));

function cv(n){
   let size=0;
   for(i=0;i<n.length;i++){
    if(n[i]=="a" ){
        size++;
    }
   }

} 
array=[1,2,3,4];
array.forEach((i,idx)=>{
    console.log(i,idx,array);
});
let cal=(i)=>{
    console.log(i*i);
}

let sq=[2,3,4,5,1];
sq.forEach(cal);
 