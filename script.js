const points = document.getElementById("points");
const gridContainer = document.querySelector(".gridContainer");
let score = 0;

//show green block randomly on a grid for 2s

function showBlock() {
  const block = document.createElement("div");
  block.classList.add("block");
  gridContainer.appendChild(block);
  setTimeout(() => {
    block.remove();
  }, 2000);
}
