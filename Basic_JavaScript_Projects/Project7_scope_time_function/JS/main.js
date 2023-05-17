
//Method Statments

function checkNumber() {
    var number = parseInt(document.getElementById("numberInput").value);
    var resultElement = document.getElementById("result");

    if (number > 0) {
        resultElement.textContent = "The number is positive.";
    } else if (number < 0) {
        resultElement.textContent = "The number is negative.";
    } else {
        resultElement.textContent = "The number is zero.";
    }
}