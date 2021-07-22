function myFunction(p1, p2) {
    return p1 * p2;
}

function name(parameter1, parameter2, parameter3) {
    // code
}

let x = myFunction(4, 3); // Function is called, return value will end up in x
function myFunction(a, b) {
    return a * b; // Function returns the product of a and b
}

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
document.getElementById("demo").innerHTML = toCelsius(77);






// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName






// Object


// Properties

car.name = Fiat

car.model = 500

car.weight = 850 //kilogram

car.color = white




// Methods
car.start()

car.drive()

car.brake()

car.stop()




// JavaScript  Object
const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};



// Javascript Definition
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};


person.lastName;
person["lastName"];


const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};



/**
 * JS Events
 * 
 */

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
text.length; // Will return 26



let textt = "We a\'re the so-called \"Vikings\" from/\\/\\ the north.";
console.log(textt);






// slice(start, end)
// substring(start, end)
// substr(start, length)



let str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13));
console.log(str.slice(-12, -6));
console.log(str.slice(7));
console.log(str.slice(-12));
console.log(str.substring(7, 13));
console.log(str.substr(7, 6));
console.log(str.substr(7));
console.log(str.substr(-4));

let next = "Please visit Microsoft!";

console.log(next.replace("Microsoft", "W3Schools"));


let bug = "Please visit Microsoft and Microsoft!";
let newText = bug.replace("MICROSOFT", "W3Schools");
console.log(bug.replace("MICROSOFT", "W3Schools"));



let text1 = "Hello World!"; // String
let text2 = text1.toUpperCase();
console.log(text2);
