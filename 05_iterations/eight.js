//Reduce function
const mynums=[1,2,3,4,5];
const myarr=mynums.reduce((acc,curr)=>{
    console.log(`acc:${acc} and curr:${curr}`)
return acc+curr;
},0)
//Output-->>
// acc:0 and curr:1
// acc:1 and curr:2
// acc:3 and curr:3
// acc:6 and curr:4
// acc:10 and curr:5
//acc is an empty variable providded by reduce function,curr is the value of current array number.
//The first time acc asks for the value which is provided after function definition i.e. 0.
//Next onwards it holds the returned value.
console.log(myarr);
//Output-->15


//Real world scenario
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totalPrice=shoppingCart.reduce((previousSum,item)=>{
  return previousSum+item.price;
},0);
console.log(`Your cart total is Rs.${totalPrice}`);
//Item is a reference to object of the array.
