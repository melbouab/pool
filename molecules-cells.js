function RNA(str) {
  let result = str.split("");

  for (let i = 0; i < result.length; i++) {
    if (result[i] === "G") result[i] = "C";
    else if (result[i] === "C") result[i] = "G";
    else if (result[i] === "T") result[i] = "A";
    else if (result[i] === "A") result[i] = "U";
  }

  return result.join("");
}
function DNA(str) {
  let result = str.split("");

  for (let i = 0; i < result.length; i++) {
    if (result[i] === "C") result[i] = "G";
    else if (result[i] === "G") result[i] = "C";
    else if (result[i] === "A") result[i] = "T";
    else if (result[i] === "U") result[i] = "A";
  }

  return result.join("");
}
