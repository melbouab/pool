export function compose() {
  let m = new Map(); 
  window.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      let all = document.querySelectorAll(".note");
      if (all.length > 0) {
        all[all.length - 1].remove();
      }
      return;
    }
    if (e.key === "Escape") {
      let all = document.querySelectorAll(".note");
      for (let i = 0; i < all.length; i++) {
        all[i].remove();
      }
      return;
    }
    if (/[a-z]/.test(e.key) && e.key.length === 1) {
      const div = document.createElement("div");
      if (!m.has(e.key)) {
        const color = generaterandomcolor();
        m.set(e.key, color);
      }
      const assignedColor = m.get(e.key);
      div.style.backgroundColor = assignedColor;
      div.classList.add("note");
      div.textContent = e.key;
      document.body.append(div);
    }
  });
}

function generaterandomcolor() {
  let num1 = Math.trunc(Math.random() * 255) + 1;
  let num2 = Math.trunc(Math.random() * 255) + 1;
  let num3 = Math.trunc(Math.random() * 255) + 1;
  return `rgb(${num1},${num2},${num3})`;
}
