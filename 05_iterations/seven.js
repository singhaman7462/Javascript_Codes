//Map function
const mynums=[1,2,3,4,5,6,7,8,9,10];
// const newNums=mynums.map((num)=>{
//  return num+10;
// })
// console.log(newNums);
//Same as filter 


// Chainig method 
const newNums=mynums.map((num)=>{
    return num*10;
}).map((num)=>{
    return num+3;
}).filter((num)=>{
return num>40;
})
console.log(newNums);
//Output-->[
//   43, 53,  63, 73,
//   83, 93, 103
// ]
//Next map is applied on the array retunred by previous map.