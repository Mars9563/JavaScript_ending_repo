// Strings

const name = "Mradul";
const repocount = 14;

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String("Mradul-Raj-Singh");

console.log(gameName.__proto__);

console.log(gameName.substring(0, 4)); // [) start include, end exclude

console.log(gameName.slice(-4, -1));

// String to array

console.log(gameName.split("-"))