let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let currentCircle = null;

function checkCollision(circle, box) {
  const circleRect = circle.getBoundingClientRect();
  const boxRect = box.getBoundingClientRect();

  return !(
    circleRect.right < boxRect.left ||
    circleRect.left > boxRect.right ||
    circleRect.bottom < boxRect.top ||
    circleRect.top > boxRect.bottom
  );
}

export function createCircle() {
  window.addEventListener("mousedown", function (e) {
    if (e.target.classList.contains("circle")) return;
    let box = document.querySelector(".box");
    let div = document.createElement("div");
    div.classList.add("circle");
    div.style.left = e.clientX + "px";
    div.style.top = e.clientY + "px";
    if (checkCollision(e.target, box)) {
      div.dataset.isTrapped = "false";
    } else {
      div.dataset.isTrapped = "true";
    }
    document.body.append(div);
  });
}

export function setBox() {
  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);
  const purpleColor = computedStyle.getPropertyValue("--purple").trim();
  let div = document.createElement("div");
  div.style.border = `2px solid ${purpleColor}`;
  div.classList.add("box");
  document.body.append(div);
}

export function moveCircle() {
  document.addEventListener("mousedown", function (e) {
    if (e.target.classList.contains("circle")) {
      isDragging = true;
      currentCircle = e.target;

      const rect = currentCircle.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
    }
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging && currentCircle) {
      e.preventDefault();
      let newX = e.clientX - offsetX;
      let newY = e.clientY - offsetY;
      const box = document.querySelector(".box");
      if (box) {
        let isTrapped = currentCircle.dataset.isTrapped === "true";

        if (!isTrapped && checkCollision(currentCircle, box)) {
          isTrapped = true;
          currentCircle.dataset.isTrapped = "true"; // صافي حصلات
          const root = document.documentElement;
          const purpleColor = getComputedStyle(root)
            .getPropertyValue("--purple")
            .trim();
          currentCircle.style.backgroundColor = purpleColor;
        }
        if (isTrapped) {
          const boxRect = box.getBoundingClientRect();
          const circleRect = currentCircle.getBoundingClientRect();
          const minX = boxRect.left;
          const maxX = boxRect.right - circleRect.width;
          const minY = boxRect.top;
          const maxY = boxRect.bottom - circleRect.height;
          newX = Math.max(minX, Math.min(newX, maxX));
          newY = Math.max(minY, Math.min(newY, maxY));
        }
      }
      currentCircle.style.left = newX + "px";
      currentCircle.style.top = newY + "px";
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
    currentCircle = null;
  });
}
