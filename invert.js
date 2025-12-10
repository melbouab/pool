function invert(obj) {
  let o = {};
  for (const [k, v] of Object.entries(obj)) {
    o[v] = k;
  }
  return o;
}
