console.log("ARRAYS");
//CREATE ARRAYS
let marks=[45,98,56,34];// 4 size of array
console.log(marks);
let names=["kanchan","kajal","jonsi"];
console.log(names);
let item=[23,"hi","green"];//generally not prefferd.
console.log(item.length);//property of arrays
//ARRAY INDICES
console.log(names[2]);//array indices
marks[1]=65;
console.log(marks); //arrys mutable
//LOOPING OVER ARRAYS
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}
//using for of loop
for(let i of names){
    console.log(i);
}
for(let i of names){//at items it will give error as 23 cant convrt to uppercae.
    console.log(i.toUpperCase());
}

//Q1given aray=[85,97,44,37,76,60]..find the average marks of the entire class.
let a=[85,97,44,37,76,60];
let avg=0;
//let avg=(85+97+44+37+76+60)/6;
//console.log(avg);
/*for(let i=0;i<a.length;i++){
    avg=avg+a[i];
}
console.log(avg/6);*/
for(let i of a){ //in is for index access and of is for element access.
    avg=avg+i;
}
console.log(`the avg  marks are ${avg/a.length}`);


//Q2.5 item's price p=[250,645,300,900,50]. Each item has 10% off.print final array.
//let p=[250,645,300,900,50];
let p = [250, 645, 300, 900, 50]; // Example prices of items
/*let p = [100, 200, 300, 400, 500]; // Example prices of items

for (let i in p) {
    let offer = p[i] / 10; // Calculate 10% of the current price
    p[i] = p[i] - offer;   // Apply the discount
    console.log(p[i]);     // Print the discounted price
}

console.log("Final Prices:", p);
*/
for(let i=0;i<p.length;i++){
    let offer=p[i]/10;
    p[i]=p[i]-offer;
}
console.log(p);

//ARRAY METHODS
let items=["hi","hiii","hello"];
items.push("oil","burger");
console.log(items);
let deleted=items.pop();
console.log(deleted);
console.log(items);
 
let f=["my","nane","is"];
console.log(f.toString());

a1=["hi","hello"];
a2=[9,5 ,6];
console.log(a1.concat(a2));

console.log(a1.unshift("hmm"));//3
console.log(a1);

let val=a2.shift();
console.log(val);
console.log(a2);

a3=[87,88,9,34,12];
console.log(a3.slice(1,3));//not include 3rd item and if slice(1),them after 1 all items displayed
//if  slice(),then it return the same array..means that we can use slice to make acopy of original array

a4=[87,98,56,34,32]
//a4.splice(1,3,76,54); //87 76 54 34 32
//console.log(a4)

//add element using splice
//a4.splice(2,0,100)//87 76 100 54 34 32
//console.log(a4)

//del element using splice
//a4.splice(0,1);
//console.log(a4);

//replace using splice
//a4.splice(2,1,101)
//console.log(a4);
a4.splice(3);//it delets rest element of the array
console.log(a4);


//Q1. create array and perfoem methods
let company=["Bloomberg","Microsoft","uber","Google","IBM","Netflix"];
//remove the first company from the array
company.shift();
console.log(company);

//remove uber & add ola in its place
company.splice(1,1,"Ola");
console.log(company);

//add amazon at the end.
company.push("Amazon");
console.log(company);





