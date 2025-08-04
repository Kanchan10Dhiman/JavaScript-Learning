let i;
for(i=1;i<=5;i++){
    console.log(i); // t t t t   t  f
}
console.log(i);//6
//cAlculate sum 1 to n
let sum=0;
let n=9;
//let n=prompt("enter n");
for(let i=1;i<=n;i++){
    sum=sum+i;
}
console.log(sum);
/* never run infinite loop on yoyr system.
for(let i=1;i>0;i++){
console.log(i);
} */

let j=9;//not execute
while(j<8){
    console.log(j);
    j++;
}
let k=9;   //k=4,ouput 4 5 6 7 //k9,output 9
do{
    console.log(k);
    k++;
}
while(k<8);

//for-of loop  to apply loops on strings and arrays
// //"tony" t o n y
let str="kanchan";
let size=0;
for(let i of str){
    size++ ;
}
console.log("size of sting")
console.log(size);
//for(let i  of str){//i =iterator
//    console.log("i=",i); //access each charcter of the string.
//}

//For-in loop used for objects and arrays//acess keys of the objects
let student={
    rollNo :34,
    nAme:"Ansh",
    age:24 
}
for(let key in student){
    console.log(key,student[key]);//to access whole key with value.
}


//Q1. print all the even number 0 to 100
for(let i=0;i<=100;i++){
    if(i%2==0)
        console.log(i);
}
/* Q2 Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value. */
/*let gameNum=25;
let userNum=prompt("Guess the right number");
while(userNum!=gameNum){
    userNum=prompt("you guess the wrong number");
}
console.log("congratulations, you entered the right number")
*/


//STRINGS
console.log("STRINGS")
let str1="hapky if hyh";
console.log(str1.length);
console.log(str1[3]);

//Template literals
let sentence=`this is a template literal`;
console.log(sentence);

let Student={
    rollNo :34,
    nAme:"Ansh",
    age:24 
}
let data=`the name of student is ${Student["nAme"]},thanku ${1+2+3}`
console.log(data);

//escape characters
console.log("kanchan\ndhiman");
console.log("kanchan\tDhiman");

//String methods
let str3=" hjgh abdKH   jh ";
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
console.log(str3);//strings are immutable in js..therre are no change in actual strings..copies or new strings are created.
console.log(str3.trim())

let str4="kanchchu";
let str5=" dhiman";
console.log(str4.slice(0,5));
console.log(str4.slice(2))
console.log(str4.concat(str5));//let a=str4.concat(str5)
let a=str4+str5;
let b="hi"+768
console.log(b);
console.log(str4.replace("ch","si"));
console.log(str4.replaceAll("ch","si"));
let c="87654";
console.log(c.replace("87","00"));
console.log(str4.charAt(4));
str4[3]="S";
console.log(str4);//S will not replace as string is immutable.

//Q1.generate username @name,length of name..@kanchan7.
let userNAME=prompt("Enter your fullname");
userNAME="@"+userNAME+userNAME.length;
console.log("here is your username:",userNAME);


