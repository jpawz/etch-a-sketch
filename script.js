const grid = document.getElementById("grid");
grid.style.cssText = "border: 2px solid red; width: fit-content;"

function generateGrid(squares, cellSize) {
  for (let row = 0; row < squares; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.style.cssText = "display: flex; flex-direction: row;";
    grid.appendChild(rowDiv);
    for (let column = 0; column < squares; column++) {
      const div = document.createElement("div");
      div.style.cssText = `width: ${cellSize}px; height: ${cellSize}px;`;
      div.style['background-color'] = "rgb(255,255,255)";
      div.className = "cell";
      rowDiv.appendChild(div);
    }
  }

  document.querySelectorAll(".cell").forEach((cell) =>
    cell.addEventListener("mouseenter", (event) => {
      event.target.style['background-color'] = getDarkerColor(event.target.style['background-color']);
    })
  );
}

function getDarkerColor(rgbValue) {
  let currentColorValue = +rgbValue.split(',')[1]; // middle value from "rgb(255,255,255)"
  const darkerColor = currentColorValue - 10;
  if(darkerColor < 0) {
    return "rgb(0,0,0)";
  }

  return `rgb(${darkerColor},${darkerColor},${darkerColor})`;
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

generateGrid(16, 50);