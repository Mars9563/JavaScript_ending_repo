function sayMyName() {
    console.log('Mradul Raj Singh');
}

function addTwoNumbers(number1, number2) {
    return number1 + number2;
    console.log("hello");
}

// console.log(addTwoNumbers(3, 4))

function loginUserMessage(username) {
    return `${username} just logged in`
}

// console.log(loginUserMessage("Mradul"))

console.log(loginUserMessage());

// number of parameters not known
function calculateCartPrice(val1, val2,...num1) {

    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    price: 199
}

function handleObj(anyobj) {
    console.log()
}