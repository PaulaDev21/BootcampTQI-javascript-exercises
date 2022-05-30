
const MIN_VALUE = -5, MAX_VALUE = 5;

function increase(){
    let numberElem = document.getElementById('number');
    let currentNumber = numberElem.textContent;
    let newNumber = parseInt(currentNumber) + 1;
    if (outOfLimits(newNumber)){
        alert('Only values between ' + MIN_VALUE + ' and ' + MAX_VALUE + ' are allowed!');
        return;
    }
    if (newNumber >= 0){
        numberElem.style.color = 'black';
    }
    numberElem.textContent = newNumber+'';
}

function decrease(){
    let numberElem = document.getElementById('number');
    let currentNumber = numberElem.textContent;
    let newNumber = parseInt(currentNumber) -1;
    if (outOfLimits(newNumber)){
        alert('Only values between ' + MIN_VALUE + ' and ' + MAX_VALUE + ' are allowed!');
        return;
    }
    if (newNumber < 0){
        numberElem.style.color = 'red';
    }
    numberElem.textContent = newNumber+'';
}

function outOfLimits(currentNumber){
    if (currentNumber < MIN_VALUE 
        || currentNumber > MAX_VALUE) {
        return true;
        }
    return false; 
}