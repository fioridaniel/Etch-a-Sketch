const ROWS = 8;
const COLS = 8;

const grid = document.querySelector(".grid");

for(let r = 0; r < ROWS; r++) {
    const row = document.createElement("div");
    row.className = "row";
    
    for(let c = 0; c < COLS; c++) {
        const cell = document.createElement("div");
        cell.className = "row-cell";  
        
        row.appendChild(cell);
    }    
    grid.appendChild(row);
}