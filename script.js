// Create a function add
const add = function(a, b) {
    return a + b;
      
};
// Create a function subtract
const subtract = function(a, b) {
	return a - b;
};
//Create a mulitply function 
const mulitply = function(a, b) {
	return a * b;
};
//Create a divide function 
const divide = function(a, b) {
	return b===0 ? "Can't divide with zero" : a / b;
};
//Each operation will contain 3 parts: the first number, the operator,
//the second number. Create a variable for each part

let firstNum;
let operator;
let secondNum;

//Create a new function operate that takes an operator 
//and 2 numbers and then calls one of the above functions on the numbers.

//First, I need to create an object storing all the operations

const operations = {
    "+": add,
    "-": subtract,
    "*": mulitply,
    "/": divide,
}