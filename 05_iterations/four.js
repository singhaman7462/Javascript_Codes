//Iterate on objects
const myobj={
    js:'javascript',
    cpp:'c++',
    py:'python',
    rb:'ruby'
}

//For in loop for object
for(key in myobj){
console.log(key);
}
//Prints all the keys
//If you get the keys you can easily print the object values by indexing through keys

const prog=["js","rb","cpp","py"];
for(key in prog){
    console.log(key);
    }
//Output 
// 0
// 1
// 2
// 3
//For in prints only keys or the indexes of the objcts

//For in cant be used to iterate over maps