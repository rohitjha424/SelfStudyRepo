//Q1: Use logical operator to find whether the Age of a person lies between 10 to 20
//Ans 1:

let a = parseInt(prompt("Enter your Age"));
console.log(typeof a);

if (a > 10 && a < 20) {
  alert("Age lies between 10 to 20");
} else {
  alert("age doen'st lies between 10 to 20");
}


//Q2: Demonstrate the Use of swich case statement in  JS:
// Ans 2:

let b = prompt("Choose 1: Mango, Papaya, Orange")

switch(b){
    case "Mango": alert("You chose Mango")
    break
    case "Papaya": alert("You chose Papaya")
    break
    case "Orange": alert("You chose Orange")
    break
    default: alert("You chose None");
}


//Q3 : Write a JS program to find a number Whether a Number is divisible by 2 and 3
// Ans 3

let num = parseInt(prompt("Enter a number"))


if(num%2==0 && num%3==0){
    alert("Number is Divible by 2 and 3 both")
}
else{
    alert("Not Divisible by 2 and 3")
}


//Q4 : Write a JS program to find a number Whether a Number is divisible by 2 and 3
// Ans 4

let n = parseInt(prompt("Enter a number"))


if(n%2==0 || n%3==0){
    alert("Number is Divible by 2 or 3 ")
}
else{
    alert("Not Divisible by 2 or 3")
}


//Q5: Print "You can Drive " Or "Ypur Cannot Drive " based on age being greater than 18 using ternary Operator
// Ans 5:

let age = parseInt(prompt("Enter your age"))

age>18?alert("You can Drive"):alert("You Cannot Drive")