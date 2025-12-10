function filterKeys(obj, fn) {
  let o = {};
  for (const [k, v] of Object.entries(obj)) {
    if (fn(k)) {
      o[k] = v;
    }
  }
  return o;
}
function mapKeys(obj, fn) {
  let o = {};
  for (const [k, v] of Object.entries(obj)) {
    let t = fn(k);
    o[t] = v;
  }
  return o;
}
function reduceKeys(obj, fn, acc = "") {
  const keys = Object.keys(obj);

  return keys.reduce((acc, key) => {
    if (acc === "") return key;
    return fn(acc, key);
  }, acc);
}

