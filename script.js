const calculator = {
    displayValue: 0,
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};



function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === 0 ? digit : displayValue + digit;
    }
  
    console.log(calculator);
  };

  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
  
    if (firstOperand == null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = performCalculation[operator](firstOperand, inputValue);
  
      calculator.displayValue = (result);
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
  }

  const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  
    '=': (firstOperand, secondOperand) => secondOperand
  };


function updateDisplay() {
    const display = document.querySelector('.output-field');
    display.value = calculator.displayValue;

    
}

updateDisplay();


const keys = document.querySelector('.operation-operand-container');

keys.addEventListener('click', (event) => {
    

const target = event.target;

    if(!target.matches('button')) {
        return;
    }

    if(target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
    
    }

    if(target.classList.contains('clear-btn')) {
        console.log('clear', target.value);

        return;
    }
    if (!target.matches('button')) {
        //exit the function
        return;
      }

      inputDigit(target.value);
      updateDisplay();

});





