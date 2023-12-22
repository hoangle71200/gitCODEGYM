let arrayNum = [];
let arrayValue = [];
function inputNum () {
    arrayNum = arrayNum + document.getElementById('numID').value ;
}

function inputValue () {
    arrayValue = arrayValue + document.getElementById('valueID').value;
}
function result() {
    console.log(arrayNum);
    console.log(arrayValue);
}

function add() {
    let inputNumber1 = document.getElementById('num1');
    let inputNumber2 = document.getElementById('num2');
    let number1 = parseInt(inputNumber1.value);
    let number2 = parseInt(inputNumber2.value);
    let result = number1 + number2;
    console.log(result);
}

function sub() {
    let inputNumber1 = document.getElementById('num1');
    let inputNumber2 = document.getElementById('num2');
    let number1 = parseInt(inputNumber1.value);
    let number2 = parseInt(inputNumber2.value);
    let result = number1 - number2;
    console.log(result);
}

function mul() {
    let inputNumber1 = document.getElementById('num1');
    let inputNumber2 = document.getElementById('num2');
    let number1 = parseInt(inputNumber1.value);
    let number2 = parseInt(inputNumber2.value);
    let result = number1 * number2;
    console.log(result);
}

function div() {
    let inputNumber1 = document.getElementById('num1');
    let inputNumber2 = document.getElementById('num2');
    let number1 = parseInt(inputNumber1.value);
    let number2 = parseInt(inputNumber2.value);
    let result = number1 / number2;
    console.log(result);
}