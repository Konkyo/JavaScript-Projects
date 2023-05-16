//Function to be executed when the button is clicked
var button = document.getElementById("timeButton");
var paragraph = document.getElementById("timeParagraph");
button.onclick = function() {
    this.innerHTML = Date();
};