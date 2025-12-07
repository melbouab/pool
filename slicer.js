function slice(array, start, end = array.length) {
  let t = [];
  if (start < 0) {
    start = -start;
    start = array.length - start;
    if (start < 0) start = 0;
  }
  if (end < 0) {
    end = -end;
    if (end < array.length - 1) {
      end = array.length - end;
    } else {
      end = array.length;
    }
  }
  for (let i = start; i < end; i++) {
    t.push(array[i]);
  }
  return typeof array === "string" ? t.join("") : t;
}
