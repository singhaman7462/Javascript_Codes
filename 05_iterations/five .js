//Array specific loops
const coding=["js","ruby","cpp","py","java"];
//For each loop
// coding.forEach( function (item){
// console.log(item);
// }  )
//The syntax for 'for each'.It needs a callback function in the parameter.

//Giving arrow function as a callback
// coding.forEach( (item)=>{
//     console.log(item);
//     }  )


  //How to pass a pre declared function in for each
//   function printMe(item){
//     console.log(item);
//   }  
//   coding.forEach( printMe);
  //Only reference of a pre defined function is given DONT EXECUTE IT


  //There are parametrs other than items also that can be passed.
  coding.forEach((item,index,arr)=>{
      console.log(item,index,arr);
  })
  //Output
//   js 0 [ 'js', 'ruby', 'cpp', 'py', 'java' ]
// ruby 1 [ 'js', 'ruby', 'cpp', 'py', 'java' ]
// cpp 2 [ 'js', 'ruby', 'cpp', 'py', 'java' ]
// py 3 [ 'js', 'ruby', 'cpp', 'py', 'java' ]
// java 4 [ 'js', 'ruby', 'cpp', 'py', 'java' ]


//forEach loop in an object
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=> {
console.log(item);
})
//Can access it by properties