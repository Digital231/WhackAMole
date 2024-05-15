const points = document.getElementById("points");
const gridContainer = document.querySelector(".gridContainer");
let score = 0;

for (let i = 0; i < 25; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  gridContainer.appendChild(cell);
}

function showBlock() {
  const cells = document.querySelectorAll(".cell");
  const randomIndex = Math.floor(Math.random() * cells.length);
  const block = document.createElement("div");
  block.classList.add("block");

  block.addEventListener("click", () => {
    score++;
    points.textContent = `Score: ${score}`;
    block.remove();
  });

  cells[randomIndex].appendChild(block);

  setTimeout(() => {
    if (block.parentElement) {
      block.remove();
    }
  }, 500);
}

setInterval(showBlock, 500);
