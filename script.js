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

let firstNum = NaN;
let operator = "";
let secondNum = NaN;

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

const operatorArray = ["+","-","*","/"];
//Now we will create functions so that when we click the buttons
// it will append the numbers to the display
delButton = document.querySelector(".delete");
delButton.addEventListener("click", () => {
    display.value = display.value.slice(0,-1);
    operand = display.value.split(/[+\-*/]/);
    firstNum = parseFloat(operand[0]);
    secondNum = parseFloat(operand[1]);
    
    for (oper of operatorArray) {
        if (display.value.includes(oper)) {
            operator = display.value.match(/[+\-*/]/)[0];
            break;
        } else {
            operator = "";
        }
    }

})

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

//Modify the on click event of operators
const plusBtn = document.querySelector("#plus");
plusBtn.addEventListener("click", () => append(`+`));

const subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener("click", () => append(`-`));

const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", () => append(`*`));

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", () => append(`/`));


if ((secondNum===0)&&(operator=="")) {
    firstNum=+display.value;
}

if (operator !== "") {
    secondNum = +display.value; 
}

equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if ((operator==="/")&&(secondNum===0)) {
        alert("You can't divide by zero");
    } else if (operator!=="") {
        ////insert
        //secondNum = parseFloat(display.value);
        ////
        result.value = operations[operator](firstNum,secondNum);
        preAnwer = operations[operator](firstNum,secondNum);
        ////isert//
        //firstNum = parseFloat(display.value); // Update firstNum for subsequent calculations
        display.value = `${preAnwer}`;
    } //else if ((operator==="")&&(firstNum===NaN)&&(secondNum===NaN)&&(typeof preAnwer !=="undefined")) {

    operator = ""; // Reset operator after calculation
    //secondNum = 0;
    //
    firstNum = 0;
    secondNum = 0;
});

let subOperator = "";

operatorButtons = document.querySelectorAll(".operation");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if ((operator === "")/*&&(typeof preAnwer ==="undefined")*/) {
            operator = button.textContent;

            result.value = '';
        } else if ((operator!=="")&&(typeof preAnwer === "undefined")){
            //secondNum = parseFloat(display.value);
            //display.value = "";
            //operator = button.textContent;
            preAnwer = operations[operator](firstNum,secondNum);
            display.value = `${preAnwer}`+`${button.textContent}`;
            //display.value = "";
            //firstNum = 0;
            operator = `${button.textContent}`;

            result.value = '';
        } else if ((operator!=="")&&!(typeof preAnwer === "undefined")) {
            //operator = button.textContent;
            preAnwer = operations[operator](firstNum,secondNum);
            display.value = `${preAnwer}`+`${button.textContent}`;
            //result.value = operations[operator](firstNum,secondNum);
            operator = `${button.textContent}`;

            result.value = '';
            //debug
            //subOperator = operator.slice();
            //debug
        } else if ((operator==="")&&(firstNum===0)&&(secondNum===0)&&!(typeof preAnwer==="undefined")) {
            //operator = `${button.textContent}`;
            //display.value = `${preAnwer}` + `${operator}`;
            //result.display = operations[button.textContent](firstNum,secondNum);

            //debug
            operator = button.textContent;
            //firstNum = preAnwer;
            display.value = preAnwer + operator;

            result.value = '';
            //debug
        } else if ((operator!=="")&&(firstNum!==0)&&(secondNum!==0)&&!(typeof preAnwer==="undefined")) {
            //result.value = operations[operator](firstNum,secondNum);
            //operator = display.value.match(/[+\-*/]/)[0];
            result.value = operations[operator](firstNum,secondNum);
            display.value = `${preAnwer}`+`${button.textContent}`;
            //operator = `${button.textContent}`;

            
        }
    })
})
let preAnwer;
clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    preAnwer = undefined;
    firstNum = 0;
    secondNum = 0;
    operator = "";
    result.value = "";
})



//for (oper of operatorArray) {
//    if (display.value.includes(oper)) {
//        console.log("true");
//    } else {
//        console.log("no");
//    }
//}

const body = document.querySelector("body");
body.style.fontFamily = 'YourFontFamily, sans-serif';