export function pick() {
  //   hsl
  let hsl = document.createElement("div");
  hsl.setAttribute("class", "hsl");
  hsl.textContent = "here";
  hsl.style.position = "absolute";
  hsl.style.top = 50 + "%";
  hsl.style.left = 50 + "%";
  hsl.style.transform = "translate(-50%,-50%)";
  document.body.append(hsl);
  document.addEventListener("mousemove", (e) => {
    let h = Math.min(360, Math.max(0, e.clientX));
    let l = Math.min(100, Math.max(0, e.clientY));
    document.body.style.backgroundColor = `hsl(${h}, 100%, ${l}%)`;
    hsl.textContent = `hsl(${h}, 100%, ${l}%)`;
  });

  //   hue
  let hue = document.createElement("div");
  hue.style.position = "absolute";
  hue.style.top = 30 + "px";
  hue.style.right = 30 + "px";
  hue.textContent = "hue";
  hue.style.transform = "translate(-50%,-50%)";
  hue.style.backgroundColor = "green";
  hue.setAttribute("class", "hue");
  document.body.append(hue);

  //   luminosity
  let luminosity = document.createElement("div");
  luminosity.style.position = "absolute";
  luminosity.style.bottom = 40 + "px";
  luminosity.style.left = 40 + "px";
  luminosity.textContent = "luminosity";
  luminosity.style.transform = "translate(-50%,-50%)";
  luminosity.style.backgroundColor = "blue";

  luminosity.setAttribute("class", "luminosity");
  document.body.append(luminosity);
}
