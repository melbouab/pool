import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
  let tag = document.createElement("style");
  let style = "";
  for (let i = 0; i < colors.length; i++) {
    style += `.${colors[i]}{
      background:${colors[i]}
      }
      `;
  }
  tag.textContent = style;
  document.head.append(tag);
}
export function generateColdShades() {
  let arr = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"];
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (colors[i].includes(arr[j])) {
        let div = document.createElement("div");
        div.classList.add(colors[i]);
        div.textContent = colors[i];
        document.body.append(div);
        break;
      }
    }
  }
}
export function choseShade(shade) {
  let divs = document.querySelectorAll("div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].className = shade;
  }
}
