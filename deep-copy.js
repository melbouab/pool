function deepCopy(o) {
  if (o instanceof RegExp) return new RegExp(o);
  if (typeof o === "function") return o;
  if (Array.isArray(o)) {
    return o.map(deepCopy);
  }
  if (typeof o === "object") {
    let r = {};
    for (const [k, v] of Object.entries(o)) {
      r[k] = deepCopy(v);
    }
    return r;
  }
  return o;
}
console.log(deepCopy({ 2: [1, 2] }));
