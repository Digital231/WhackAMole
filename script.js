const points = document.getElementById("points");
const gridContainer = document.querySelector(".gridContainer");
let score = 0;

for (let i = 0; i < 25; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  gridContainer.appendChild(cell);
}

function showConfetti(x, y) {
  const confettiDuration = 1000;

  const end = Date.now() + confettiDuration;

  (function frame() {
    confetti({
      origin: { x: x / window.innerWidth, y: y / window.innerHeight },
      particleCount: 200,
      startVelocity: 50,
      ticks: 100,
      spread: 150,
      colors: ["#bb0000", "#ffffff"],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

const offsetX = 900;
const offsetY = 0;

function showBlock() {
  const cells = document.querySelectorAll(".cell");
  const randomIndex = Math.floor(Math.random() * cells.length);
  const block = document.createElement("div");
  block.classList.add("block");

  block.addEventListener("click", () => {
    score++;
    points.textContent = `Score: ${score}`;
    block.remove();

    const rect = block.getBoundingClientRect();
    const confettiX = rect.left + rect.width / 2 + offsetX;
    const confettiY = rect.top + rect.height / 2 + offsetY;
    showConfetti(confettiX, confettiY);
  });

  cells[randomIndex].appendChild(block);

  setTimeout(() => {
    if (block.parentElement) {
      block.remove();
    }
  }, 500);
}

setInterval(showBlock, 500);
