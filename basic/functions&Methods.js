/*console.log("FUNCTIONS AND METHODS"); //.function
"abc".toUpperCase();//.function
[1,2,3].push(4);//.function and passed arguements
*/
function print(){
    console.log("hi");
    console.log("good");
};
print();
print();

function naam(msg){//parameter
    console.log(msg);
}
naam("kanchu");//argument
//Nan msg* n  not a number

//add function
function sum(x,y){
    //local var x y
    //console.log(x+y);
    s=x+y;
    return s;
}
let a=12,b=6;
let c=sum("k","s");//functions can be stored in the variables.
console.log(c);

//arrow functions
const minus=(a,b)=>{//when write in console minus the function will display there.
    console.log(a-b);
}
minus(a,b);

let  mul=(a,b)=>a*b;
console.log(mul(a,b));//12*6=72
mul=9;

const printHello=()=>console.log("hello ");
printHello();//hello
let hi=printHello();//hello//after type "hi variable" it will show undefined.
console.log(hi);//undefined ``      ``


//arrow functions- parts of modern js- use for short codes
const sumTwo=(b,c)=>b+c;
console.log(sumTwo(4,7));
let sumision=sumTwo(a,b);//undefined coz nothing is returned.

//Q1.function to take string input and return the no.of vowels
function vowel(str){//when i simply call function without passing arguement it will give error
    let count=0;
    for(i=0;i<=str.length;i++){
        if(str[i]=='a' || str[i]=='e'|| str[i]=='i' ||str[i]=='o'|| str[i]=='u'){
            count++ ;
        }
    }
    return count;
}
//let input=prompt("enter string")//let input=vowel("abcdeiief");
//show=vowel(input);
//console.log(show);//working

//Q2.same function with arrow function
const vow=(str)=>{
    let count=0;
    for(i=0;i<=str.length;i++){
        if(str[i]=='a' || str[i]=='e'|| str[i]=='i' ||str[i]=='o'|| str[i]=='u'){
            count++ ;
        }
    }
    return count; 
}
console.log(vow("kanchan"));
//METHODS
//methods are fn. when func associates with data structure or object it become methods.
//forEach is used to create a loop.
//in js we can pass functions as parametr and can also return value of any function.
console.log("METHODS");
function printh(){
    console.log("hello");
}
function hiil(printh){
    return printh;
}
printh();
say=hiil(8);//"hi")
console.log(say);

let arr=[1,2,3,4,5];
//arr.forEach(function printval(i){
 //   console.log(i)});
 //we pass callbackFunction as a arrow function in the forEach method.
console.log("FOREACH");//NO NEW array is created.
 arr1=["hi","hello","tata"]
arr1.forEach((i,arr1)=>{//in this the value,index,array is passed respectively.
    console.log(i.toUpperCase(),arr1);//as in forEach arr1 is treated as index so also in console it is printing the index.
});                           //if (i) in forEach then it will be printed as array itself.

//Q1.find given array of no.s print the square of each value using the forEach loop.
arr2=[1,2,3,4];
console.log("squares of the gievn array values:")
let funy=arr2.forEach((i)=>{
    return i*i;//console.log(i*i);
});
console.log(funy);//undefined as nothing can be returned in the forEach.
//let func=(i)=>{
//    console.log(i*i);
//};
//arr2.forEach(func);//CallBackfunction ia passed as an arguement.
/*let arr2 = [1, 2, 3, 4];

let func = (value, index, array) => {
    array[index] = value * value; // Update the array directly
};

arr2.forEach(func);

console.log(arr2); // [1, 4, 9, 16]
 */

//Map function-CREATES NEW ARRAY
console.log("MAP FUNCTION");
/* let arr = [1, 2, 3, 4];

let squares = arr.map((value) => {
    return value * value; // Returns the transformed value
});

console.log(squares); // [1, 4, 9, 16] (New array)
console.log(arr);     // [1, 2, 3, 4] (Original array is unchanged)
*/

let num=[45,86,5,4];
num.map((i)=>{
    console.log(i);
});
let show=num.map((i)=>{
    return i*i;
});
console.log(show);//new array is created and no change in actual array num.
//filter method  -CREATES NEW ARRAY
console.log("FILTER METHOD");
let newa=[3,5,1,4,2];
let evena=newa.filter((i)=>{
    return i%2==0;
});
console.log(evena);
let grt=newa.filter((i)=>{
    return i>2;
});
console.log(grt);//filter metthod does not modify the original array.
//Reduce method
console.log("REDUCE METHOD");
let red=[1,2,3,1];
//1+2+3+1=7
red.reduce((prev,curr)=>{
    console.log(prev+curr);// 3 Nan then undefined with the console.log().
});
const outp=red.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(outp);
initialval=0;
const tell=red.reduce((prev,curr)=>{
    return prev+curr;
},initialval );
console.log(tell);
//largest element in the array
let large=[3,1,2,4,6];
const la=large.reduce((prev,curr)=>{
    return prev>curr? prev :curr;
});
console.log(la);
let larg = [3, 1, 2, 4, 9];

const lag = larg.reduce((prev, curr) => {
    if (prev > curr) {
        return prev; // If the previous value is greater, keep it as the accumulator.
    } else {
        return curr; // Otherwise, update the accumulator to the current value.
    }
});

console.log(lag); // 9
//Q1.filter out marks of students that scored 90+.       
let scores=[10,20,60,98,93,23];
mar=scores.filter((i)=>{
    return i>90;
});
console.log(mar);

console.log("QUESTIONS")
//Q2. take input n. craete 1 to n
//use reduce method to calculate sum of all numbers in teh array.
//use reduce method to calculate product of the numbers in the array.


/*let q=[1,2,3,5];
let an=q.reduce((i,j)=>{
    return i+j;
});
console.log(an);

let k=[1,2,3,5];
let si=q.reduce((i,j)=>{
    return i*j;
});
console.log(si);*/
let inpi=Number(prompt("enter elements :"));
let arr11=[];
for(let i=1;i<=inpi;i++){//not taken i=0; ?
    arr11[i-1]=i;
};
console.log(arr11);
let an=arr11.reduce((i,j)=>{
    return i+j;
});
console.log(an);




