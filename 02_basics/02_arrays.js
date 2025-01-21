//Push an array into arrays
const marvelHeros=["thor","captain america","ironMan"];
const potterHeads=["Harry","Hermione","Ron"];
// marvelHeros.push(potterHeads);
// console.log(marvelHeros);
// Output --> [
//   'thor',
//   'captain america',
//   'ironMan',
//   [ 'Harry', 'Hermione', 'Ron' ]
// ]


//Concat method
// const newArray=marvelHeros.concat(potterHeads);
// console.log(newArray);
// Output -->
// [ 'thor', 'captain america', 'ironMan', 'Harry', 'Hermione', 'Ron' ]


//Spread the arrays
const spreadArray=[...marvelHeros,...potterHeads];
console.log(spreadArray);
// Output -->
// [ 'thor', 'captain america', 'ironMan', 'Harry', 'Hermione', 'Ron' ]


//Array Methods

//isArray
// all following calls return true
// Array.isArray([]);
// Array.isArray([1]);
// Array.isArray(new Array());
// Array.isArray(new Array("a", "b", "c", "d"));
// Array.isArray(new Array(3));
// // Little known fact: Array.prototype itself is an array:
// Array.isArray(Array.prototype);

// // all following calls return false
// Array.isArray();
// Array.isArray({});
// Array.isArray(null);
// Array.isArray(undefined);
// Array.isArray(17);
// Array.isArray("Array");
// Array.isArray(true);
// Array.isArray(false);
// Array.isArray(new Uint8Array(32));
// // This is not an array, because it was not created using the
// // array literal syntax or the Array constructor
// Array.isArray({ __proto__: Array.prototype });

//from method
/*Array.from() lets you create Arrays from:
iterable objects (objects such as Map and Set); or, if the object is not iterable,
array-like objects (objects with a length property and indexed elements).*/
//const set = new Set(["foo", "bar", "baz", "foo"]);
//Array.from(set);
// Output-> [ "foo", "bar", "baz" ]





//*****************************************


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));