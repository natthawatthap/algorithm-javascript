JavaScript is a versatile programming language that is primarily used for web development. Here are some basic syntax examples to help you get started:

### 1. **Variables and Data Types:**
```javascript
// Declare variables with var, let, or const
var x = 5;        // Function-scoped variable (avoid using var)
let y = 'Hello';  // Block-scoped variable
const z = true;   // Constant (cannot be reassigned)

// Data types: Number, String, Boolean, Object, Array, null, undefined
let numberVar = 42;
let stringVar = 'JavaScript';
let booleanVar = true;
let objectVar = { key: 'value' };
let arrayVar = [1, 2, 3];
let nullVar = null;
let undefinedVar;

// Log variables to the console
console.log(x, y, z);
```

### 2. **Operators:**
```javascript
let a = 5;
let b = 2;

// Arithmetic operators
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;

// Comparison operators
let isEqual = a === b;
let isNotEqual = a !== b;
let greaterThan = a > b;
let lessThan = a < b;

// Logical operators
let andOperator = true && false;
let orOperator = true || false;
let notOperator = !true;
```

### 3. **Control Flow:**
```javascript
let condition = true;

// If statement
if (condition) {
    console.log('Condition is true');
} else {
    console.log('Condition is false');
}

// Switch statement
let fruit = 'Apple';
switch (fruit) {
    case 'Apple':
        console.log('It\'s an apple');
        break;
    case 'Banana':
        console.log('It\'s a banana');
        break;
    default:
        console.log('Unknown fruit');
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let counter = 0;
while (counter < 3) {
    console.log(counter);
    counter++;
}
```

### 4. **Functions:**
```javascript
// Function declaration
function greet(name) {
    return 'Hello, ' + name + '!';
}

// Function expression
let multiply = function(x, y) {
    return x * y;
};

// Arrow function
let square = (num) => num * num;

console.log(greet('Alice'));
console.log(multiply(3, 4));
console.log(square(5));
```

### 5. **Objects and Arrays:**
```javascript
// Object literal
let person = {
    name: 'John',
    age: 30,
    isStudent: false,
    greet: function() {
        console.log('Hello!');
    }
};

// Accessing object properties
console.log(person.name);
console.log(person['age']);

// Array
let fruits = ['Apple', 'Banana', 'Orange'];

// Accessing array elements
console.log(fruits[0]);
console.log(fruits.length);

// Adding and removing elements
fruits.push('Grapes');
fruits.pop();

// Iterating through an array
for (let fruit of fruits) {
    console.log(fruit);
}
```