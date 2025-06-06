// singleton made from the constructor

// object literals

const mysym = Symbol("key1");

const JsUser = {
    name: "Mradul",
    "full name": "Mradul raj Singh",
    [mysym]: "kk1",
    age: 20,
    location: "India",
    email: "mradul@japan.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mysym]);


// freezing a object
JsUser.isLoggedIn = true;
// Object.freeze(JsUser);
JsUser.age = 21;
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
};

JsUser.greetingtwo = function(){
    console.log(`hello js user, ${this["full name"]}`);
};
console.log(JsUser.greeting);
console.log(JsUser.greetingtwo());