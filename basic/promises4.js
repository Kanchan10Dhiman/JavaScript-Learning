//ASYNC AWAIT

function getdata(dataId){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("data",dataId);
        resolve("success");
        
     },3000)
    });
}
//ab ye niche vala callbacks se thoda sa thik lgta h dekhne me ..pr fr b messy hojayga jada statements add krne k baad
// let p=getdata(1);
//getdata.then((res)=>{--->this line error kuki function pe then ni lgta promise object pe lgta h 
getdata(1).then((res)=>{
    return getdata(2);//console.log(res);
}).then((res)=>{
   return getdata(3);
}).then ((res)=>{
    console.log("successful chaining")
})
;