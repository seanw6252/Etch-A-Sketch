const container = document.getElementById("container");

function makeGrid(rows, columns) {
    if (container.hasChildNodes) {
        container.querySelectorAll('*').forEach(n => n.remove());
    }
    
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    for (let i = 0; i < (rows * columns); i++) {
        let gridSquare = document.createElement('div');
        gridSquare.addEventListener('mouseover', (e) => {
            if (eraseMode) {
                e.target.style.backgroundColor = 'white';
            } else if (rainbowMode) {
                e.target.style.backgroundColor = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
            } else {
                e.target.style.backgroundColor = 'black';
            }
        });
        container.appendChild(gridSquare).className = "grid-square";
    }

}

function resetGrid() {
    let gridRows = getComputedStyle(document.documentElement).getPropertyValue("--grid-rows");
    makeGrid(gridRows, gridRows);
}

function resizeGrid() {
    let newSize = prompt("Enter a new size (Maximum of 100):");
    if (Number(newSize)) {
        if (Number(newSize > 0 && newSize < 100)) {
            makeGrid(newSize, newSize);
        } else {
            alert("Please enter a valid number between 0 and 100.")
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let rainbowMode = false;
let eraseMode = false;

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener('click', resetGrid);

const resizeButton = document.getElementById("resize-button");
resizeButton.addEventListener('click', resizeGrid);

const rainbowButton = document.getElementById("rainbow-button");
rainbowButton.addEventListener('click', () => {
    rainbowMode = !rainbowMode;
});

const eraseButton = document.getElementById("erase-button");
eraseButton.addEventListener('click', () => {
    eraseMode = !eraseMode;
});

makeGrid(16, 16)