import { styles } from "./pimp-my-style.data.js";

let counter = 0;
let isRemoving = false;

export function pimp() {
  const btn = document.querySelector(".button");
  if (!btn) return;

  if (!isRemoving) {
    btn.classList.add(styles[counter]);
    counter++;
    if (counter === styles.length) {
      isRemoving = true;
      btn.classList.toggle("unpimp");
    }
  } else {
    counter--;
    btn.classList.remove(styles[counter]);
    if (counter === 0) {
      isRemoving = false;
      btn.classList.toggle("unpimp");
    }
  }
}
