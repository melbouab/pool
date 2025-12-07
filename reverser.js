function reverse(arr) {
  let f = false;
  if (typeof arr === "string") {
    arr = [...arr];
    f = true;
  }
  let t = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    t.push(arr[i]);
  }
  if (f) {
    return t.join("");
  }
  return t;
}
