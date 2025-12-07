export function generateLetters() {
  let size = 10;
  for (let i = 1; i <= 120; i++) {
    let random = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    let div = document.createElement("div");
    div.textContent = random;
    div.style.fontSize = `${size + i}px`;
    if (i <= 40) {
      div.style.fontWeight = `${300}`;
    } else if (i <= 80) {
      div.style.fontWeight = `${400}`;
    } else {
      div.style.fontWeight = `${600}`;
    }
    document.body.append(div);
  }
}
