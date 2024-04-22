console.log('This is my variable script');

// This is a string
let greeting = "Hello World, this is a string!";
console.log(greeting);

// These are numbers
let integerOne = 10;
console.log(integerOne);

let integerTwo = '42';
console.log(integerTwo);

let integerThree = 8;

let total = integerOne + integerThree;
console.log(total);

// This is a float (number)
let myfloat = 3.1234;
console.log(myfloat);

let totalTwo = integerOne + myfloat;
console.log(totalTwo);

// This is Boolean
let isJavaScriptFun = true;
console.log(isJavaScriptFun);

// This is an Undefined variable
let thisVariableIsUndefined;
console.log(thisVariableIsUndefined);

// This variable is null
let thisIsNull = null;
console.log(thisIsNull);

// This is an Object
let person = {
    name: 'Johann',
    age: '32',
    gender: 'male',
    hair: 'blonde'
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.gender);

// This is an array
let fruits = ['apple','orange','grapes', 'watermelon'];
console.log(fruits);

// This is a function
function greet() {
    console.log('This is a greeting');
}

greet();

// Example of functions
function calculate() {
    const anotherTotal = integerOne + integerThree;
    return anotherTotal;
}

function logResult2(finalTotal) {
    console.log(finalTotal)
}

const finalTotal = calculate();
logResult2(finalTotal);


// Declaring variables
const num1 = 10;
const num2 = 5;

// First function
function calculation() {
    const total = num1 * num2;
    return total;
}
const result = calculation();

// Second function
function logResult() {
    console.log(result);
}

// Calling the function
logResult();



















// I want you to create a multiplication calculation
// Use 3 variables for the calculations
// Use a second function to log the total out

