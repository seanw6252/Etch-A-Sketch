const container = document.getElementById("container");

function makeGrid(rows, columns) {
    if (container.hasChildNodes) {
        container.querySelectorAll('*').forEach(n => n.remove());
    }
    
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    for (let i = 0; i < (rows * columns); i++) {
        let gridSquare = document.createElement('div');
        container.appendChild(gridSquare).className = "grid-square";
    }
}