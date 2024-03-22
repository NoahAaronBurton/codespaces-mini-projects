let display = document.getElementById('display');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');


function increase() {
    var currentCount = display.innerHTML;
    currentCount ++;
    display.innerHTML = currentCount;
};

function decrease () {
    var currentCount = display.innerHTML;
    currentCount --;
    display.innerHTML = currentCount;
}

function reset () {
    display.innerHTML = 0;
}