//Create the grid

const grid = document.querySelector(".grid");
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  grid.appendChild(row);
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
  }
}

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
