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

let firstNum = 0;
let operator = "";
let secondNum = 0;

//Create a new function operate that takes an operator 
//and 2 numbers and then calls one of the above functions on the numbers.

//First, I need to create an object storing all the operations

const operations = {
    "+": add,
    "-": subtract,
    "*": mulitply,
    "/": divide,
}

function operate(operator, num1, num2) {
    if (!operations[operator] || isNaN(num1) || isNaN(num2)) {
        return NaN;
      }
    
      return operations[operator](num1,num2);
}

display=document.querySelector("#display");

//Now we will create functions so that when we click the buttons
// it will append the numbers to the display
function append(number) {
    display.value += `${number}`;
    operand = display.value.split(/[+\-*/]/)
    //if (operator === "") {
    //    firstNum = parseFloat(display.value);
    //}
    firstNum = parseFloat(operand[0]);
    secondNum = parseFloat(operand[1]);
}

//Create an algorithm for calculation 

if ((secondNum===0)&&(operator=="")) {
    firstNum=+display.value;
}

if (operator !== "") {
    secondNum = +display.value; 
}

equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if ((operator==="/")&&(secondNum===0)) {
        console.log("You can't divide by zero");
    } else if (operator!=="") {
        ////insert
        //secondNum = parseFloat(display.value);
        ////
        result.value = operations[operator](firstNum,secondNum);

        ////isert//
        //firstNum = parseFloat(display.value); // Update firstNum for subsequent calculations
        operator = ""; // Reset operator after calculation
        //secondNum = 0;
        //
    }
});

operatorButtons = document.querySelectorAll(".operation");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "") {
            operator = button.textContent;
        } else {
            secondNum = parseFloat(display.value);
            display.value = "";
            operator = button.textContent;
        }
    })
})
let preAnwer;
clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    preAnwer = +result.value;
    result.value = "";
})

