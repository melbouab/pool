function filterValues(obj, fn) {
  let o = {};
  for (const [k, v] of Object.entries(obj)) {
    if (fn(v)) {
      o[k] = v;
    }
  }
  return o;
}

function mapValues(obj, fn) {
  let o = {};
  for (const [k, v] of Object.entries(obj)) {
    o[k] = fn(v);
  }
  return o;
}
function reduceValues(obj, fn, acc = 0) {
  for (const [k, v] of Object.entries(obj)) {
    acc = fn(acc, v);
  }
  return acc;
}
