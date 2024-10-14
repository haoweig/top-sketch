// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.getElementById('container');
//     const gridSize = 16;

//     for (let i = 0; i < gridSize * gridSize; i++) {
//         const square = document.createElement('div');
//         square.classList.add('grid-square');
//         square.addEventListener('mouseenter', changeColor);
//         container.appendChild(square);
        
//     }

//     function changeColor(e) {
//         // Generate a random color
//         const randomColor = Math.floor(Math.random()*16777215).toString(16);
//         e.target.style.backgroundColor = "#" + randomColor;
//     }
// });
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const resizeBtn = document.getElementById('resize-btn');
    let gridSize = 16; // Default grid size

    function createGrid(size) {
        // Clear existing grid
        container.innerHTML = '';
        
        // Calculate new square size
        const squareSize = 960 / size;

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            
            square.addEventListener('mouseenter', changeColor);
            
            container.appendChild(square);
        }
    }

    function changeColor(e) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = "#" + randomColor;
    }

    function resizeGrid() {
        let newSize = prompt("Enter the number of squares per side for the new grid (max 100):");
        newSize = parseInt(newSize);
        
        if (newSize && newSize > 0 && newSize <= 100) {
            gridSize = newSize;
            createGrid(gridSize);
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    }

    resizeBtn.addEventListener('click', resizeGrid);

    // Initial grid creation
    createGrid(gridSize);
});