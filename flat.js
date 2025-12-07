function flat(arry, num = 1) {
  let t = [];
  if (num === 0) {
    return arry;
  }
  for (let ar of arry) {
    if (Array.isArray(ar)) {
      t.push(...flat(ar, num - 1));
    } else {
      t.push(ar);
    }
  }
  return t;
}

