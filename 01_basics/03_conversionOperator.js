let score = "33abc";


// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// in this case valueInNumber contains NaN
// it is a number type but we will talk later

// "33" => 33
// "33abc" = NaN
// true = 1; false = 0;
// null = 0;
// undefined  = NaN

let val = undefined;

let boolVal = Boolean(val);
// console.log(boolVal);

// non-zero = true; 0 = false;
// "" = false; "anything" = 1;
// null = false;
// undefined = false


let someNumber = 33;

let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);


// ********* Operations **********

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "Hello";
let str2 = " Mradul";

let str3 = (str1+str2)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


console.log(+true);
console.log(+"");

let gameCounter = 100;

console.log(gameCounter++);
// i know ++x and x++ what they are;
// but if someone else is reading this then
// Let me expalin, let x = 1
// so if you write ++x it means => increase x and then use it
// and if you write x++ it means => use x now and after that increase it
// so c = ++x + 2 => 4
// but if c = x++ + 2 => 3