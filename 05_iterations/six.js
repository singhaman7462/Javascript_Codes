//Some more features of for each loop
// const coding=["js","ruby","cpp","py","java"];

//What is returned by for each loop
// const values=coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(values);
//Output --> undefined...for each cant return any values



// Which loop should be used to return some bvalue from the aarray.
const mynums=[1,2,3,4,5,6,7,8,9,10];
//Filter method for array
const newNums=mynums.filter((num)=> num>4);
//Syntax is similar to for each loop but it returns some value
console.log(newNums);
//output-->[ 5, 6, 7, 8, 9, 10 ]

//Syntax 2--> Curly braces in arroew function
const newNums1=mynums.filter((num)=> {
    return num<4;
});
console.log(newNums1);
//Output-->[ 1, 2, 3 ]
//If you use curly braces(scope opened) in callback function then you must use return statement.

//If oyu want to do the same thing using for each loop
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);


//Values like we get from our database
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 
  //Print all the books whose genre is history
  const historyBooks=books.filter((book)=>{
    return book.genre==="History";
  })
//   console.log(historyBooks);

  //Print all the books which are published after 2007
  const booksAfter2007=books.filter((book)=>{
    return book.publish>2007;
  })
//   console.log(booksAfter2007);

  //Print all the books which are published after 1995 and their genre is history
  const historyAfter1995=books.filter((book)=>{
return (book.publish>1995)&&(book.genre==="History");
  })
  console.log(historyAfter1995);