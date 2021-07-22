console.time("Let");
let x = {
    name: "Sardor",
    surname: "Shodmonov",
    phone: "+998 99 011 08 95",
    birthYear: 1995,
    age: function() {
        return new Date().getFullYear() - this.birthYear;
    }
};
console.timeEnd("Let");


console.time("Var");
var y =  {
    name: "Sardor",
    surname: "Shodmonov",
    phone: "+998 99 011 08 95",
    birthYear: 1995,
    age: function() {
        return new Date().getFullYear() - this.birthYear;
    }
};
console.timeEnd("Var");


console.time("Const");
const z =  {
    name: "Sardor",
    surname: "Shodmonov",
    phone: "+998 99 011 08 95",
    birthYear: 1995,
    age: function() {
        return new Date().getFullYear() - this.birthYear;
    }
};
console.timeEnd("Const");


console.time("With object literal");
const d =  {
    name: "Sardor",
    surname: "Shodmonov",
    phone: "+998 99 011 08 95",
    birthYear: 1995,
    age: function() {
        return new Date().getFullYear() - this.birthYear;
    }
};
console.timeEnd("With object literal");

console.time("With new object");
const c =  new Object();
c.name = "Sardor";
c.surname = "Shodmonov";
c.birthYear = 1995;
c.age = function() {
    return new Date().getFullYear() - this.birthYear;
};
console.timeEnd("With new object");