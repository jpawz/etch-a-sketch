for (let row = 0; row < 16; row++) {
  const rowDiv = document.createElement("div");
  rowDiv.style.cssText = "display: flex; flex-direction: row;";
  document.body.appendChild(rowDiv);
  for (let column = 0; column < 16; column++) {
    const div = document.createElement("div");
    div.style.cssText = "width: 50px; height: 50px; background-color: gray;";
    rowDiv.appendChild(div);
  }
}
