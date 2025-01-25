//Array specific loops

const arr=[1,2,3,4,5,6];

//for of loop
for (const num of arr) {
    console.log(num);
}//Prins all elements of the array
//It works on both arrays and strings both and may more such lists

//for of in string
const greetings="Good morning";
for (const greet of greetings) {
    console.log(greet);
}
//prints all the letters one by one


//Maps
const map=new Map();
map.set('IN','INDIA');
map.set('USA','America');

//For of in maps
// for (const key of map) {
//     console.log(key);
// }
//Output-->[ 'IN', 'INDIA' ]
//[ 'USA', 'America' ]

//To print key and values separately
//Destructuring of array
for (const [key,value] of map) {
    console.log(key,'->',value);
}
//Output-->  IN -> INDIA
//           USA -> America

// console.log(map);
//Output -->Map(2) { 'IN' => 'INDIA', 'USA' => 'America' }

//For of cant be used to iterarte through propearties of object