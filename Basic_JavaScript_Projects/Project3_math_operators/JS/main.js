function performAddition() {
    var num1 = 5;
    var num2 = 10;
    var sum = num1 + num2;
  
    var mathParagraph = document.getElementById("Math");
    mathParagraph.innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum + ".";
  }


  function performSubtraction() {
    var num3 = 10;
    var num4 = 5;
    var difference = num3 - num4;

    var mathParagraph = document.getElementById("Math_2");
    mathParagraph.innerHTML = "The difference between " + num3 + " and " + num4 + " is " + difference + ".";
  }

  function performMultiplication() {
    var num5 = 6;
    var num6 = 8;
    var result = num5 * num6;

    var mathParagraph = document.getElementById("Math_3");
    mathParagraph.innerHTML = "The result of " + num5 + " and " + num6 + " is " + result + ".";
  }

  function performDivision() {
    var num7 = 15;
    var num8 = 3;
    var quotient = num7 / num8;

    var mathParagraph = document.getElementById("Math_4");
    mathParagraph.innerHTML = "The division of " + num7 + " by " + num8 + " is " + quotient + ".";
}

function performMultiple() {
    var num9 = 1;
    var num10 = 2;
    var num11 = 10;
    var num12 = 5;

    var product = (num11 + num10) - (num12 * num9) / num12;

    var mathParagraph = document.getElementById("Math_5");
    mathParagraph.innerHTML = "The result is" + product + ".";
}

function performModulus() {
    var num13 = 25;
    var num14 = 6;
    var modulus = num13 % num14;

    var mathParagraph = document.getElementById("Math_6");
    mathParagraph.innerHTML = "When you divide 25 by 6 the reminder is" + modulus + ".";
}

function performNegation() {
    var x = 10;

    var mathParagraph = document.getElementById("Math_7");
    mathParagraph.innerHTML = "The result is" + -x + ".";
}

function performIncrement() {
    var x = 5;
    x++;
    var result = document.getElementById("Math_8");
    result.innerHTML = "Incremebted value: " + x;
}

function performDecrement() {
    var x = 5.25;
    x--;
    var result = document.getElementById("Math_9");
    result.innerHTML = "Decremented Value is:" + x + ".";
}

// Generate a random number between 0 and 100 and rounds it up
var randomNumber = Math.random(); // Generate a random number between 0 and 1
var roundedNumber = Math.round(randomNumber * 100); // Round the random number to the nearest integer

window.alert("Random Number: " + randomNumber + "\nRounded Number: " + roundedNumber);