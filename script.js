//Create the grid

const grid = document.querySelector(".grid");
let gridSize = 16;

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);
    for (let i = 0; i < size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }
  }
}

createGrid(gridSize);

//Draws on mousedown

function colorCell() {
  this.classList.add("cellActive");
}

grid.addEventListener("mousedown", () => {
  const allCells = document.querySelectorAll(".cell");
  allCells.forEach((cell) => cell.addEventListener("mouseenter", colorCell));
});

grid.addEventListener("mouseup", () => {
  const allCells = document.querySelectorAll(".cell");
  allCells.forEach((cell) => cell.removeEventListener("mouseenter", colorCell));
});

//Create new grid with btn

const gridBtn = document.querySelector("#gridBtn");
gridBtn.addEventListener("click", () => {
  grid.textContent = "";
  createGrid(32);
});
