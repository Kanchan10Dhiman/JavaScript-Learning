console.log("hello");
const profile={
    namei: "knchn",
    class: 7,
};
console.log(profile["namei"]);//knchn
profile["namei"]="dog";
console.log(profile['namei']) //dog
//arithmetic operators
let a=2;
let b=4;
console.log(a+b);
let c=a+b;
console.log(c);
console.log("a*b=",a*b);
console.log("a+b"+ a+b)// a+b98 When you concatenate a string with numbers (a and b), JavaScript treats everything as a string.
console.log(a+b)//17
console.log(a/b)// 1.125 in js point considered too.
console.log(a**b);
console.log(a^b);//xor 
console.log(Math.pow(2,4));
//urinary operator
console.log(a++);//here just increment not stored so ans is 2
console.log(a);//here now stored from a++ and is 3
console.log(a++);// 4  //5

//assignment operators
a+=3;// 8
console.log(a**=b); 
console.log(a-=b);
console.log(a%=b);
console.log(a*=b)

//comparison operators
m=9  //
n=8
console.log(m==n)//false
console.log(m!=n) // true
console.log(m>n)// true
console.log(m>=n)//true
console.log(m<=n)// false
console.log(m===n)// false true for 8 =8.0 let var const dont mttr....but string and number mttr..i.e not equal
console.log(n!==m)//true 

//logical operators
console.log(m==n && m>n );//false
console.log(m==n || m>n);//true
console.log(!(m==n))//true
console.log(m!=n)//true

//conditionals
/*let color;
let mode="white";
if(mode=="white"){
    color="black";
}
console.log(color); //black*/
let mode="pink";
let color;
if(mode=="black"){
    color="black"
}
else if(mode=="pink"){
    color="pink"
}
else if(mode=="orange"){
    color="orange";
}
else {
    color="white";
}
console.log(color);
//single if
if(mode=="orange")
    console.log(mode); //{1 condition mode,color etc}
//Ternary operators
mode=="orange"? console.log(color) : console.log("no color");
//let result=mode=="orange"? console.log(color) : console.log("no color");
let result=mode=="pink"? "yes":"no";
console.log(result);

let i=6;
switch(i){
    case 1:
        console.log("hi");
        break;
    case 2: console.log("hello");
    break;
    default : console.log("bye");    
}

//get  input a number and check multiple of 5
/*let num=prompt("enter no :");
if(num%5==0){
    console.log(num ,"multiple of 5");
}else{
 console.log("not multiple of 5");}

let num2=prompt(" enter number");
console.log(num2);*/

//write a code to give grades to students
//let score=34;
let score=prompt("enter marks");
let grade;
if(score>=80 && score<=100){
    grade ="A";//console.log("A grade");
}else if(score<=79 && score>=70){
    grade ="B";//console.log("B grade");
}else if(score>=60 && score<=69){
    grade ="C";//console.log("C grade");
}else if(score>=50 && score<=59){
    grade ="D";//console.log("D garde")
}else {
    grade ="Fail";//console.log("fail")
}
console.log(grade);