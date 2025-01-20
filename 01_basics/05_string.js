let name="Aman";
const age=21;
console.log("Age of "+name+" is "+age);
//Outdated way of String concatenation.

//New way is Using ``. This method is called String interpolation.
console.log(`Age of ${name} is ${age} years.`);

//Other way of declaring string is to using String object
const hero="Steve Rogers";
console.log(hero.length);
console.log(hero.toUpperCase());

console.log(hero.charAt(7));
console.log(hero.lastIndexOf('e'));

console.log(hero.substring(2,4));
console.log(hero.slice(2,4));
console.log(hero.slice(-5,-2));






//*****************************************************************************/

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));