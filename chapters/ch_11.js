// singleton - by constructor
// Object.create

// object literals

const mySym = Symbol('key1')

const jsUser = {
    name: "Mradul",
    "full name": "Mradul Raj Singh",
    age: 21,
    location: 'Moradabad',
    email: "mradul@mrsdev.in",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "myKey1",
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "mars@mars.com"

// Object.freeze(jsUser);

jsUser.email = "mars@pluto.com"
// console.log(jsUser);

jsUser.greetings = function () {
    console.log('Hello js user');
}
jsUser.greetingsTwo = function () {
    console.log(`hello js user, ${this["full name"]}`)
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());