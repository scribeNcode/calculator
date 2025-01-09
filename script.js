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





let userClickedbutton = document.querySelector('#result');

let currentNumClicked = [];



// use populateDisplay function directly on button

document.querySelector('#one').addEventListener('click',()=>{
    populateDisplay(1)
});


document.querySelector('#two').addEventListener('click',()=>{
    populateDisplay(2)
});

document.querySelector('#three').addEventListener('click',()=>{
    populateDisplay(3)
})

document.querySelector('#four').addEventListener('click',()=>{
    populateDisplay(4)
})

document.querySelector('#five').addEventListener('click',()=>{
    populateDisplay(5)
})

document.querySelector('#six').addEventListener('click',()=>{
    populateDisplay(6)
})

document.querySelector('#seven').addEventListener('click',()=>{
    populateDisplay(7)
})

document.querySelector('#eight').addEventListener('click',()=>{
    populateDisplay(8)
})


document.querySelector('#nine').addEventListener('click',()=>{
    populateDisplay(9)
})



// ------------      Operators  ----------------------


document.querySelector('#plus').addEventListener('click',()=>{
    populateDisplay('+')
})


document.querySelector('#minus').addEventListener('click',()=>{
    populateDisplay('-')
})


document.querySelector('#multiply').addEventListener('click',()=>{
    populateDisplay('*')
})


document.querySelector('#divide').addEventListener('click',()=>{
    populateDisplay('/')
})


// Create the functions that populate the display when you click the buttons.
function populateDisplay(buttonValue){
    
    if(buttonValue === 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || '+' || '-' || '*' || '/'){
        currentNumClicked.push(buttonValue)
       
        userClickedbutton.value +=  buttonValue 
        console.log(currentNumClicked)

    }
  
}

