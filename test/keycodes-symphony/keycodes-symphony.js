export function compose() {
  let m = new Map();
  window.addEventListener("keydown", (e) => {
    if (/[a-z]/.test(e.key)) {
      let div = document.createElement("div");
      const color = generaterandomcolor();
      if (![...m.values()].includes(color)) {
        m.set(color, e.key);
        div.style.backgroundColor = color;
        div.classList.add("note");
        div.textContent = e.key;
        document.body.append(div);
      }
      if (e.key === "Backspace") {
        let all = document.querySelectorAll(".note");
        all[all.length - 1].remove();
      }
      if (e.key === "Escape") {
        let all = document.querySelectorAll(".note");
        for (let i = 0; i < all.length; i++) {
          all[i].remove();
        }
      }
    }
  });
}

function generaterandomcolor() {
  let num1 = Math.trunc(Math.random() * 255) + 1;
  let num2 = Math.trunc(Math.random() * 255) + 1;
  let num3 = Math.trunc(Math.random() * 255) + 1;
  return `rgb(${num1},${num2},${num3})`;
}
