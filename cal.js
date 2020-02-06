let lightMode = document.querySelector('.light-mode');
let darkMode = document.querySelector('.dark-mode');
let greenMode = document.querySelector('.green-mode');
let parentContainer = document.querySelector('.parent-container')
let keys = document.querySelector('.operation-operand-container')
let display = document.querySelector('.output-field');
let signature = document.querySelector('.signature')


lightMode.addEventListener('click', function(){
    document.body.style.backgroundColor = 'white';
    parentContainer.style.backgroundColor = 'black';
    display.style.backgroundColor = 'white';
    signature.style.color = '#00000066';

    
});

darkMode.addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
    parentContainer.style.backgroundColor = '#fdf7f7';
    display.style.backgroundColor = 'transparent';
    signature.style.color = '#ffffff66';
    

    
});

greenMode.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
    parentContainer.style.backgroundColor = '#fdf7f7';
    display.style.backgroundColor = 'transparent';
    signature.style.color = '#ffffff66';
    

    
});

let runningTotal = 0;
let buffer = '0';
let previousOperator;
let previousOperation;

display.value = buffer;


parentContainer.addEventListener('click', function(event){
    const {target} = event;
     if (!target.matches('button')) {
        return;
    }
        else{
    buttonClick(event.target.value)
        }

});

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }else if(parseInt(value)){
        handleNumber(value);
    }
  
    
    rerender();
    
};

function handleNumber(value){
    if(buffer === '0'){
        buffer = value;
    }
    else{
        buffer += value;
    }
    
};


function handleSymbol(value){
    switch(value){
        case 'c' :
            buffer = '0';
            runningTotal = buffer;
            runningTotal = 0;
            break;
        case '=' :
            if (previousOperator === null){
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            break;
            default:
                handleMath(value);
                break;
            

    }
    
    
};

function handleMath(value){
    let intBuffer = parseInt(buffer);
    if(runningTotal === 0){
        runningTotal = intBuffer;
    }
    else{
        flushOperation(intBuffer);
    }

    previousOperator = value;

    buffer = '0';
   

}



function flushOperation(intBuffer){
    if(previousOperator === '+') {
        runningTotal += intBuffer;
    }
   
    else if(previousOperator === '-') {
        runningTotal -= intBuffer;
    }
    else if(previousOperator === '*') {
        runningTotal *= intBuffer;
    }
    else if(previousOperator === '/') {
        runningTotal /= intBuffer;
    }
  
}


function rerender(){
    display.value = buffer;
}






















/*



const calculator = {
    displayValue: 0,
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};






keys.addEventListener('click', (event) => {
    

    const target = event.target;
    
        if(!target.matches('button')) {
            return;
        }
    
        if(target.classList.contains('operator')) {
            console.log('operator', target.value)

            return;
        
        }
    
        if(target.classList.contains('clear-btn')) {
            console.log('clear', target.value);
    
            return;
        }
        
        let operand = parseInt(target.value);
        console.log('operation', target.value)
        
})

*/