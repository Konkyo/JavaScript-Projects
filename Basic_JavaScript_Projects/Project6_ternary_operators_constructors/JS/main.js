function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short ": "You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}


function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young ": "You are old enough ";
    document.getElementById("Vote").innerHTML = Can_vote + "to vote.";
}


//Keywords and constructors

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Product(Name, Price, Category) {
    this.Product_Name = Name;
    this.Product_Price = Price;
    this.Product_Category = Category;
}

var Fruit = new Product("Apple", "$0.60", "Fruit");
var Phone = new Product("iPhone 20", "$1200.00", "Electronics");
var Books = new Product("Moby Dick", "$25.00", "Books");
var Shoes = new Product("Nike Air Max", "$150.00", "Footwear");

function my_Function() {
    document.getElementById("Product_Details").innerHTML =
    "The " + Phone.Product_Name + " is a " + Phone.Product_Category + 
    " prices at " + Phone.Product_Price;
}

//Nested Function
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}