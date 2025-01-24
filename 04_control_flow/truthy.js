//Truthy values 
const userEmail="";
if(userEmail){
    console.log(`got your email`);
}
else{
    console.log(`no email`);
}
//truthy values are considered to be true.no comparisons are done.
//any string is true,
//given is the list of the falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values
// "0", 'false', " ", [], {}, function(){}


//To check array we cant give empty array
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


//To check object we convert it in an array
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
//This function returns an array so we can use the array method.


//nullish coalescing operator(??):null or undefined
let val1;
// val1=5??10;//first value is entered
val1=null??10;//10 is assigned
console.log(val1);
//checks the validity of null that if assigned null will it affeect the functionality.if no null is assigned else some other value is assigned.
//same case is with undefined 


//Ternary operator
condition?true:false;


//************************************** */

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")