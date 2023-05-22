// Loops through numbers 1 to 10 and displays them
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// Displays the length of the string "Hello World"
function Call_String() {
    let text = "Hello World";
    let length = text.length;
    document.getElementById("lenghtString").innerHTML = length;
}

// Iterates through an array of instruments and displays them
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Displays a cat picture description from an array
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture the cat is " +
       Cat_Picture[2] + ".";
}

// Modifies a constant object and displays its properties
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = " The cost of the " +
       Musical_Instrument.type + " was " + Musical_Instrument.price;
}

// Demonstrates the scope of variables using let
function let_Assignment() {
    var x = 82;
    document.write(x);
    {
        let X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + x);
}

// Updates the content of an element with a return value
function Return_Value() {
    // Perform any necessary calculations or operations here
    var value = 42; // Example return value

    // Update the text content of the <p> element with the id "Returns"
    document.getElementById("Returns").textContent = "Returned value: " + value;
}

// Creates a car object and displays its description
function Object_with_P_and_M() {
    let car = {
        make: "Dodge",
        model: "Viper",
        year: "2021",
        color: "yellow",
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        } 
    };
    document.getElementById("Car_Object").innerHTML = car.description();
}

// Demonstrates the use of the break statement in a loop
function Break_Button() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += " The number is " + i + "<br>";
    }
    document.getElementById("Break_Statement").innerHTML = text;
}

// Demonstrates the use of the continue statement in a loop
function Continue_Statement() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text +=