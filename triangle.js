function triangle(s, n) {
  let t = "";
  for (let i = 1; i <= n; i++) {
    t += s.repeat(i);
    if (i !== n) t += "\n";
  }
  return t;
}
