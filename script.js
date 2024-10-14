document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const gridSize = 16;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.addEventListener('mouseenter', changeColor);
        container.appendChild(square);
        
    }

    function changeColor(e) {
        // Generate a random color
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = "#" + randomColor;
    }
});