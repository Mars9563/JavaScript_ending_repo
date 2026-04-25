const tinderUser = new Object();

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        first: 'mars',
        last: "pluto"
    }
}

// console.log(regularUser.fullname)

const obj1 = { 1: "a", 2: "b" };
const abj2 = { 3: "a", 4: "b" };
// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, can add more objects and the first parameter is the target object in which all the values will go);

const obj3 = { ...obj1, ...abj2 };

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }, {
        id: 1,
        email: "a@gmail.com"
    }, {
        id: 1,
        email: "a@gmail.com"
    }, {
        id: 1,
        email: "a@gmail.com"
    },
];

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js course",
    price: '999',
    courseInstructor: 'Hitesh'
}

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {

// }
// navbar(company = 'hitesh')

// ----- API -----

