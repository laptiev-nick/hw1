const green_block = document.querySelector('.green_block');
const red_block = document.querySelector('.commission');
const inputRange = document.querySelector('input[type="range"]');
const inputNumber = document.querySelector('input[type="number"]');

const calculate = (event) => {

    const { value } = event.target;
    
    if (event.target.type === 'range') {
        inputNumber.value = value;
    }

    else {
        inputRange.value = value;
    }
    
    green_block.style.height = value + 'px';

    if (inputNumber.value < 20) {
        red_block.style.height = `${2}px`;
    }

    else if (20 < inputNumber.value < 50) {
       red_block.style.height = `${4}px`;
    }
        
    else if (50 < inputNumber.value < 75) {
        red_block.style.height = `${6}px`;
    }
        
    else {
        red_block.style.height = `${8}px`;
    }
 }

inputRange.addEventListener('input', calculate);
inputNumber.addEventListener('input', calculate);