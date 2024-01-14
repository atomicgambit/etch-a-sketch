//Create the grid

const grid = document.querySelector(".grid");
let gridSize = 9;

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
  gridSize = 32;
  createGrid(gridSize);
});

//Clear grid with button

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
  grid.textContent = "";
  createGrid(gridSize);
});

//Display slider value
const slider = document.querySelector("#myRange");
const slideContainer = document.querySelector(".slidecontainer");
const gridMessage = document.createElement("p");
gridMessage.textContent = `Grid size: ${slider.value} x ${slider.value}`;
slideContainer.append(gridMessage);
slider.addEventListener("input", () => {
  gridMessage.textContent = `Grid size: ${slider.value} x ${slider.value}`;
});
