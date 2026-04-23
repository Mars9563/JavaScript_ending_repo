// === checks both datatype and value
// == coversions happen so it fucks up a little well who cares


// Primitive 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 104985709889124905873489792179480912n;
console.log(typeof bigNumber);
// Reference(Non primitive)
// Array, Objects, Functions


const heros = ["Trago", "Grain", "RangerX"];
let myObj = {
    name: "mradul",
    age: 22,
}
const myFunction = function () {
    console.log("hello Mradul");
}

// JS is Dynamically typed language.

