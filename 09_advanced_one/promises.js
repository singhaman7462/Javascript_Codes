//Promises
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Sometimes some of the tasks are not completed as fast as other tasks like the file read,database fetching or encryption ,So these tasks need to be made asynchronous so that rest of the programm don't stop.

//Promise is a way of async programming to send those slow tasks in queue and to tell the js engine to notify once the task is completed.

// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//fetch is one of the promise

//A Promise is an object representing the eventual completion or failure of an asynchronous operation

//Methods to create a promise

// Method1:Using the promise constructor->Its a new method since es6 as Promise is an object so we can use its constructor.
//Earlier befor Promise consturctor people used some external libraries like q or bluebird

// const promise1=new Promise((resolve,reject)=>{
// //Do any async task
// setTimeout(() => {
//     console.log('Async task is completed');
//     resolve();//For .then method to be executed resolve is mandatory.
// }, 2000);
// });

//Promise is created the constructor takes two params resolve and reject.These will be used while consuming the promise.

// Methods to consume the promise1

// promise1.then(()=>{
//     console.log("Promise is consumed");
// })

//.then is connected to resolve

//Method 2 to create and cinsume promise

// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('Methid 2 to create a promise');
//         resolve();
//     }, 4000);

// }).then(()=>{
// console.log('Method 2 to consume a promise');
// });

//Method 3 to create and consume a promise

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: "Aman Singh", email: "singh45aman@example.com" });
//   }, 2000);
// });

// promise3
//   .then((user) => {
//     console.log(user); //Output->{ name: 'Aman Singh', email: 'singh45aman@example.com' }

//     //What if we return something from this then method.Where will it be returned.
//     return user.name;
//     //This value goes to the chained then method and to consumed this returned param we have to write one more then
//   })
//   .then((name) => {
//     console.log(`name of the user is ${name}`);
//   });

//This is the way to pass the data that comes from a promise.It is passed from resolve to then method.And then we do chaining of then to get the hold of returned values from then.

//Method 4 to get both resolve and reject.

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error)
//       resolve({name: "Aman Singh", email: "singh45aman@example.com"});
//     else 
//       reject('Error occured');
//   }, 4000);
// }).then((user) => {
//   console.log(user);
// }).catch((err)=>{
// console.log(err);
// }).finally(()=>{
//     console.log('Finaly worl comoleted');
    
// });


//Finally is the third part after try,and catch.It is like a default and is executed regardless of error.It tells whether the work was done or not . 


// METHOD 5

const promise5=new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error)
        resolve({name: "Aman Singh", email: "singh45aman@example.com"});
      else 
        reject('Error occured');
    }, 1000);
  });

// console.log(promise5);
// Output -> Promise { <pending> } 
// We printed before it was complete


//Other method to consume a promise
//Using async funcn


// async function consumePromise5() {
//     const response=await promise5
//     console.log(response);
// }

//This method when called works fine for no error case but gives error when errror comes in the promise.
//So the best way to use async is to use try-catch inside the function.

async function consumePromise5() {
 
    try{
        const response=await promise5
        console.log(response);
    }
    catch(err){
        console.log(err);  
    }

}

consumePromise5();
 

//Trying it for an api call

// async function getAllusers() {
    
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json();
//         console.log(data);
//         //Data was not getting printed because response.json is also a time taking task so this should also be used with await.
//     }
//     catch(err){
//         console.log(err);
        
//     }
    
// }
// getAllusers();


// Trying it with then catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
 return response.json();
 
}).then((data)=>{
console.log(data);
}).catch((err)=>{
console.log(err);
});



//The fetch output comes first despite having a larger data and the above promise data comes after fetch.