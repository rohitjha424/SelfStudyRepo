//For Loop

// for(let i =0; i<10; i++){
//     console.log(i+1)// it will print 1 to 10
// }

// //program to print sum of N natural numbers

// let sum =0;
// let n = parseInt(prompt("Enter a Number"))
// for(let i =0; i<n+1; i++){
//   sum= sum+i
    
// }
// console.log("The Sum is " + sum)


//For In Loop : to access the Key of the Key vaolue pair object >> this loop also works with the arrays

let obj ={
    harry: 90,
    rohit: 80,
    supriya:89,
    ritika:78,
    rohan:75,
    naira:92
}

for (let key in obj) {
      console.log(key) //This will print the each Keys
      console.log("The Marks of "+ key + " is "+ obj[key]) //this will print the values of the each key

}


//For of Loop: To access each value/character of the iterable (String)

for (let b of "Rohit") {
      console.log(b)
}