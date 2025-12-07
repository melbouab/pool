let lastCircle = null;
let box = null;
export function createCircle() {
  document.addEventListener("click", function (e) {
    const div = document.createElement("div");
    div.classList.add("circle");
    div.style.background = "white";
    const x = e.clientX - 25;
    const y = e.clientY - 25;
    div.style.left = x + "px";
    div.style.top = y + "px";
    document.body.append(div);
    lastCircle = div;
    if (box) {
      updatePosition(div, x, y);
    }
  });
}
export function moveCircle() {
  document.addEventListener("mousemove", function (e) {
    if (!lastCircle) return;
    const x = e.clientX - 25;
    const y = e.clientY - 25;
    if (box) {
      updatePosition(lastCircle, x, y);
    } else {
      lastCircle.style.left = x + "px";
      lastCircle.style.top = y + "px";
    }
  });
}
export function setBox() {
  box = document.createElement("div");
  box.classList.add("box");
  document.body.append(box);
}
function updatePosition(circle, x, y) {
  const boxRect = box.getBoundingClientRect();
  const circleSize = 50;
  const wall = 1;
  const insideX = x > boxRect.left && x < boxRect.right - circleSize;
  const insideY = y > boxRect.top && y < boxRect.bottom - circleSize;
  if (insideX && insideY) {
    circle.dataset.trapped = "true";
    circle.style.background = "var(--purple)";
  }
  if (circle.dataset.trapped === "true") {
    const minX = boxRect.left + wall;
    const maxX = boxRect.right - circleSize - wall;
    const minY = boxRect.top + wall;
    const maxY = boxRect.bottom - circleSize - wall;
    x = Math.max(minX, Math.min(x, maxX));
    y = Math.max(minY, Math.min(y, maxY));
  }
  circle.style.left = x + "px";
  circle.style.top = y + "px";
}
