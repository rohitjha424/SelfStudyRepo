// Arithematic Operators 
console.log("Arithematic Operators");

let a =45; console.log("a=",a);
let b =4; console.log("b=",b);

console.log("a+b=", a+b)

console.log("a-b=", a-b)

console.log("a*b=", a*b)

console.log("a/b=", a/b)

console.log("a%b=", a/b)        // gives reminder 

console.log("a++ =", a++)           // increment

console.log("a-- =", a--)           // decrement

console.log("a=", a)   


console.log("a**b=", a**b)      // a power b 



// Assignment Operators

console.log("Assignment Operators");

let c = 10; console.log("c=",c);

c += 5;  // same as a= a+5
console.log("c +=5 is " , c)

c -= 5;
console.log("c -= 5  is ", c)

c *= 5;
console.log("c *= 5 is ", c)

c /= 5;
console.log("c /= 5 is ", c)



// Comparison Operators
console.log("Comparison Operators");

let comp1 = 10;  console.log("comp1=",comp1);
let comp2 = 20;  console.log("comp2=",comp2);
let comp3 = "10"; console.log("comp3=",comp3);

console.log("comp1 == comp2 is ", comp1 == comp2)

console.log("comp1 != comp2 is ", comp1 != comp2)

console.log("comp1 == comp3 is ", comp1 == comp3, )  // only value is compared in ==

console.log("comp1 === comp3 is ", comp1 === comp3, 
    "as typeof comp2 is ", typeof(comp2), "but typeof comp3 is ",  typeof(comp3))  //both value and type is compared 


console.log("comp1 !== comp3 is ", comp1 !== comp3)  // !== checked if Value or type is not equal



//Logical operators
console.log("Logical Operators");


let x=10; console.log("x=",x);
let y = 11;  console.log("y=",y);

console.log("x > y = ", x > y)

console.log("x < y && x=10 is ",x < y && x==10 )  // Logical AND 

console.log("x < y ||  x=11 is ",x < y && x==10 )  //Logical OR 

console.log("!true", !true)  // Logical NOT
console.log("!false", !false)   // Logical NOT