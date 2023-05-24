let container = document.createElement('div');                              

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.height = '800px'
container.style.width = '800px'
document.body.appendChild(container);
container.style.margin = 'auto';
container.style.padding = '10px';
container.style.border = '1px solid black';
document.body.style.backgroundColor = '#FAF9F6';
container.style.position = 'relative';
container.style.backgroundColor = '#9a8275';


  
//function to get a multicolored gradient over a checkerboard background
function gradientSetter() {
    //backgroundImage = linear-gradient(45deg, getRandomColor(), getRandomColor());
    let gradient = document.createElement('div');
    gradient.style.height = '800px';
    gradient.style.width = '800px';
    gradient.style.backgroundImage = `linear-gradient(to bottom right, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    gradient.style.opacity = '.5';
    gradient.style.position = 'absolute'
    
    container.appendChild(gradient);
    gradient.appendChild(checkerBoard());

}


checkerBoard();


//Set of functions to make a randomly colored checkerboard
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



//Set of functions to make a red/black checkerboard
function makeSquare(color) {
    let div = document.createElement('div');
    div.style.height = '12.5%';
    div.style.width = '12.5%';
    div.style.backgroundColor = color; 
    
    container.appendChild(div);
}

function row1() {
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            makeSquare('#353535');
        } else {
            makeSquare('#cec9c6');
        }
    }
}
console.log(container);

function row2() {
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            makeSquare('#cec9c6');
        } else {
            makeSquare('#353535');
        }
    }
}

function checkerBoard() {
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            row1();
        } else {
            row2();
        }
    }
}

console.log(container);

