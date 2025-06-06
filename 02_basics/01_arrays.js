// array

const myArr = [0,1,2,3,4,5];

// Note:
// all standard built-in copy ops in javascript create shallow copies.
/*
Shallow copy:
creates a new reference point and it points to the original reference

Deep copy:
creates a new object again
*/
// console.log(myArr[0]);
// console.log(typeof myArr);

const myHeros = ["a", "b"];

const myArr2 = new Array(1,2,3,4,4);

// Array methods

// myArr.push(6);
// myArr.pop();
// myArr.unshift(9);// adds at start
// myArr.shift(); // removes from the start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C ", myArr);