const getType = (v) => Object.prototype.toString.call(v).slice(8, -1);
function replica(...objs) {
  const result = {};
  for (const obj of objs) {
    for (const [k, v] of Object.entries(obj)) {
      if (getType(v) === "Object" && getType(result[k]) === "Object") {
        result[k] = replica(result[k], v);
      } else {
        result[k] = v;
      }
    }
  }
  return result;
}

console.log(replica({ a: 4 }, { a: { b: 1 } }));
