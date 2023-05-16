// Creating a dictionary object
function Dictionary() {
    var animals = {
      dog: {
        species: "Dog",
        color: "Black",
        breed: "Labrador",
        age: 5,
        sound: "Bark"
      },
      cat: {
        species: "Cat",
        color: "Orange",
        breed: "Persian",
        age: 3,
        sound: "Meow"
      },
      bird: {
        species: "Bird",
        color: "Blue",
        breed: "Parrot",
        age: 2,
        sound: "Squawk"
      }
    };
    delete animals.dog.sound;
    document.getElementById("Dictionary").innerHTML = animals.dog.sound;
  }
