const ROWS = 16;
const COLS = 16;

function addHoverEffect(cell) {
    cell.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "black";
    });
}

function createGrid() {
    const grid = document.querySelector(".grid");
    
    for(let r = 0; r < ROWS; r++) {
        const row = document.createElement("div");
        row.className = "row";
        
        for(let c = 0; c < COLS; c++) {
            const cell = document.createElement("div");
            cell.className = "row-cell";      
            row.appendChild(cell);

            addHoverEffect(cell);
        }    
    
        grid.appendChild(row);
    }
}

createGrid();