// Define a variable
var myVariable = "Hello, World!";

// Display the data type using document.write() and typeof
document.write("Data type of myVariable: " + typeof myVariable + "<br>");


// Make the browser display NaN
document.write("NaN: " + NaN + "<br>");

// Make the browser display "true" using isNaN()
document.write("isNaN(NaN): " + isNaN(NaN) + "<br>");

// Make the browser display "false" using isNaN()
document.write("isNaN(10): " + isNaN(10) + "<br>");

// Display "Infinity" using a large enough number
var largeNumber = 1e1000;
document.getElementById("result").innerHTML = "Large Number: " + largeNumber;

// Display "-Infinity" using a negative number
var negativeNumber = -1 / 0;
document.getElementById("result_2").innerHTML += "<br>Negative Number: " + negativeNumber + "<br>" + "<br>";


// Define variables
var number1 = 5;
var number2 = 10;

// Use greater than operator to display true
var result1 = number2 > number1;
document.getElementById("result").innerHTML += "Result 1: " + result1 + "<br>";

// Use lesser than operator to display false
var result2 = number1 < number2;
document.getElementById("result").innerHTML += "Result 2: " + result2 + "<br>";

console.log(2 + 3);  // Addition operation

console.log(false);

console.log(2 == 2);  // true (both values are equal)
console.log(2 == 3);  // false (values are not equal)

console.log(2 === 2);  // true (same data type and value)
console.log(2 === "2");  // false (different data type)
console.log("2" === "2");  // true (same data type and value)
console.log(true === 1);  // false (different data type and value)
console.log(false === 0);  // false (different data type and value)

console.log(true && true);   // true (both operands are truthy)
console.log(false && false); // false (both operands are falulty)

console.log(true && true);
console.log(false && false);

function not_Function() {
    document.getElementById("Not").innerHTML= ! (20>10);
}

function not_Function() {
    document.getElementById("Not").innerHTML = ! (5>10);
}

