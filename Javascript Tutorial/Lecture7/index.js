// Lectire 7

let a = prompt("what is yor Age ")

//Remember whatver we put in the promt >> the values always would be in sring evern though we put a number into the prompt
console.log(typeof(a))


//Converting this string to a number :

a= Number.parseInt(a)
console.log(typeof(a))

// if - else

// if(a>=18){
//     alert("This is the valid age ")
// }
// else 
// alert("!!!Invalid Age ")


// if - else if - else

if(a<18){
    alert("!!!Invalid Age")
}
else if (a >=18 && a <= 30){

    alert("Valid Age of 20-30 ")
}
else 
alert("High Age")

console.log("Done")



// Switch Case 

let c ="24";
switch(c){
    case "1":
    comsole.log("case 1")
    break;
    case "2":
    console.log("case 2");
    break;
    default:
        console.log(`default case ${c}`)
}



//Ternanry Operator
let marks =10;

let result = marks>8?"Pass": "Fail";

console.log("The result is ", result)