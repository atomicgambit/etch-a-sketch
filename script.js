//Creating the grid
//Add a container in your html
//Create a reference in js to the grid
//Use a for loop within a for loop to create a grid of 16 by 16
//let i = 0, i < 16, i++
// let j = 0, i < 16, i++
//create a div element, call it cell
//add a class to cell
//append class to grid
//give the cells a dark border

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

const allCells = document.querySelectorAll(".cell");
allCells.forEach((cell) =>
  cell.addEventListener("click", () => {
    alert("Hello Warudo!");
  })
);
