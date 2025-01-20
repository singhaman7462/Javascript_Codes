//Normal Declaration
const num=1234;
//Explicit declaration 
const num2=new Number(1346);
//Difference in printing both
console.log(num);
console.log(num2);
// 1234
// [Number: 1346]


//Number Methods
// num.toString();
// console.log(num.length);
// This part gives me error because no change in original num variable is done.


//Correct method is to store the returned string.
const numStr=num.toString();
 console.log(numStr.length);


 //toFixed Method
 let num3=1234.5678;
 console.log(num3.toFixed(2));
 //Output 1234.57-> Round off to 2 decimal places.


 //Method toPrecision
 console.log(num3.toPrecision(2));
 //Output 1.2e+3 -> 2 digits before decimal is given precedence.
 console.log(num3.toPrecision(4));
 //Output 1235 ->4 digits before decimal is given precedence.It is also rounded off.


 //Method toLocaleString
 let bignum=1000000000;
 console.log(bignum.toLocaleString());
 //Output 1,000,000,000 -> Changed to US standard
 console.log(bignum.toLocaleString('en-In'));
 //Output 1,00,00,00,000 -> Changed to Indian standard


 

 //***************Maths*********/ 

 //Mostly used method Math.random
 console.log(Math.random());
 // Output 0.10361182771958655 --> Returns a pseudorandom number between 0 and 1


 console.log(Math.random()*10);
 //Output 5.160744102300381 --> Increased the range from 0-1 to 0-10


 //To exclude 0 in output and getting only integers values.
 console.log(Math.floor((Math.random()*10)+1));
 // Output 8


 //To get the output in the range of the dice that is 0-6
 console.log(Math.floor((Math.random()*6)+1));
 // Output 1-->3-->6 So getting output in range of dice






//  *****************************************************************

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)