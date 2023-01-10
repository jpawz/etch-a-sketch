const grid = document.getElementById("grid");

function generateGrid(squares, cellSize) {
  for (let row = 0; row < squares; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.style.cssText = "display: flex; flex-direction: row;";
    grid.appendChild(rowDiv);
    for (let column = 0; column < squares; column++) {
      const div = document.createElement("div");
      div.style.cssText = `width: ${cellSize}px; height: ${cellSize}px; background-color: gray;`;
      div.className = "cell";
      rowDiv.appendChild(div);
    }
  }

  document.querySelectorAll(".cell").forEach((cell) =>
    cell.addEventListener("mouseenter", (event) => {
      event.target.style.cssText = `width: ${cellSize}px; height: ${cellSize}px; background-color: black;`;
    })
  );
}

function clearGrid() {
  grid.replaceChildren();
}

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", () => {
  const squares = document.getElementById("squares").value;
  const cellSize = document.getElementById("cellSize").value;
  clearGrid();
  generateGrid(squares, cellSize);
});
