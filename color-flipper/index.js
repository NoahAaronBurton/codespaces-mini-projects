// nav
let colorFlipperEl = document.getElementById('color-flipper');
let colorFlipperNav = document.getElementById('color-flipper-nav');
let simpleHexEL = document.getElementById('simple-hex');
let simpleHexNav = document.getElementById('simple-hex-nav');

function displayColorFlipper() {
    colorFlipperEl.style = 'display: flex; justify-content: center;';
    colorFlipperNav.className= 'currently-selected';

    simpleHexEL.style = 'display: none;';
    simpleHexNav.className= '';
}

function displaySimpleHex () {
    simpleHexEL.style = 'display: flex; justify-content: center;';
    simpleHexNav.className= 'currently-selected';

    colorFlipperEl.style = 'display: none;';
    colorFlipperNav.className= '';
}

document.getElementById('color-flipper-nav')
.addEventListener('click', function (e) {
    event.preventDefault();
    displayColorFlipper();
})

document.getElementById('simple-hex-nav')
.addEventListener('click', function (e) {
    event.preventDefault();
    displaySimpleHex();
})