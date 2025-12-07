function map(arr, fn) {
  let l = [];
  for (let i = 0; i < arr.length; i++) {
    l.push(fn(arr[i], i, arr));
  }
  return l;
}

function flatMap(arr, fn) {
  let l = [];
  for (let i = 0; i < arr.length; i++) {
    l.push(fn(arr[i], i, arr));
  }
  let n = flat(l);
  console.log(n);

  return n;
}
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

