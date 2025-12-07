function nasa(n) {
  let t = "";
  for (let i = 1; i <= n; i++) {
    if ((i % 3 === 0 && i % 5) === 0) {
      t += "NASA";
    } else if (i % 3 === 0) {
      t += "NA";
    } else if (i % 5 === 0) {
      t += "SA";
    } else {
      t += `${i}`;
    }
    if (i !== n) t += " ";
  }
  return t;
}

