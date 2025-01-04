// create a  function to add numbers
function addNum(number1, number2){
let sum = number1 + number2
console.log(sum);
return sum
}

// create a  function to subtract numbers
function subNum(number1, number2){
    let sub = number1 - number2
    console.log(sub);
    return sub
}

// create a  function to multiply numbers
function multiNum(number1, number2){
let multi = number1 * number2;
console.log(multi)
return multi
}

// create a  function to divide numbers
function divideNum(number1, number2){
    let divide = number1 / number2;
    console.log(divide)
    return divide
    }




// Create a variable for  a number, an operator, and another number each.
let firstNumber ;
let secondNumber ;
let operator;


// Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.


function operate(numA,operator,numB){
    if(operator === '+'){
        addNum(numA, numB)
    }else if(operator === '-'){
        subNum(numA, numB)
    }else if(operator === '/'){
        divideNum(numA, numB)
    }else if(operator === '*'){
        multiNum(numA, numB)
    }else{
        return 'invalid operation'
    }
}