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
document.getElementById("result_2").innerHTML += "<br>Negative Number: " + negativeNumber;