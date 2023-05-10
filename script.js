let container = document.createElement('div');                              

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.height = '800px'
container.style.width = '800px'
document.body.appendChild(container);
container.style.margin = 'auto';
container.style.padding = '10px';

makeRandomBoard();

function getRandomColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}


function makeRandomBoard() {
    for (let i = 0; i < 64; i++) {
        let randomSquare = document.createElement('div');
        randomSquare.style.height = '12.5%';
        randomSquare.style.width = '12.5%';
        randomSquare.style.backgroundColor = getRandomColor();

        container.appendChild(randomSquare);
    }
}



function makeRedSquare() {
    let div = document.createElement('div');
    div.style.height = '12.5%';
    div.style.width = '12.5%';
    div.style.backgroundColor = 'red'; 
    
    container.appendChild(div);
}

function makeBlackSquare() {
    let div = document.createElement('div');
    div.style.height = '12.5%';
    div.style.width = '12.5%';
    div.style.backgroundColor = 'black'; 
    
    container.appendChild(div);
}

function makeCheckerboard1() {
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            makeBlackSquare();
        } else {
            makeRedSquare();
        }
    }
}
console.log(container);

function makeCheckerboard2() {
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            makeRedSquare();
        } else {
            makeBlackSquare();
        }
    }
}

function checkerBoard() {
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            makeCheckerboard1();
        } else {
            makeCheckerboard2();
        }
    }
}

console.log(container);

