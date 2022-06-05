class ModeStyle{
    constructor(bgColor, color){
        this.bgColor = bgColor;
        this.color = color;
    }
}

const DARK_COLORS = new ModeStyle('darkblue', 'lightblue')
const LIGHT_COLORS = new ModeStyle('lightblue', 'darkblue');
const DARK_PHRASE = 'Dark Mode On!';
const LIGHT_PHRASE = 'Light Mode On!';

function changeMode(){
    mode = document.getElementsByClassName('change-mode-button')[0];

    if (mode.getAttribute('mode') === 'dark'){
        setMode(LIGHT_COLORS);
        mode.setAttribute('mode', 'light');
        document.getElementById('dark-mode-h1').innerHTML = LIGHT_PHRASE;
    }
    else{
        setMode(DARK_COLORS);
        mode.setAttribute('mode', 'dark');
        document.getElementById('dark-mode-h1').innerHTML = DARK_PHRASE;
    }    
}

function setMode(mode){
    mainElem = document.getElementsByTagName('main')[0];
    mainElem.style.backgroundColor = mode.bgColor;
    mainElem.style.color = mode.color;

    btnElem = document.getElementsByClassName('change-mode-button')[0];
    btnElem.style.backgroundColor = mode.color;
    btnElem.style.color = mode.bgColor;

    if (mode === DARK_COLORS){
        btnElem.innerHTML = 'Change to Light Mode';
    }
    else{
        btnElem.innerHTML = 'Change to Dark Mode';
    }
}
