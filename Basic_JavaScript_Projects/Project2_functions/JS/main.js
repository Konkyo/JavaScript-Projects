//Function to be executed when the button is clicked
var button = document.getElementById(time);
button.onclick = function() {
    this.innerHTML = Date();
}