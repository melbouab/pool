function groupPrice(str) {
  let reg = /[a-z$]+([0-9]+)\.?(\d+)/gi;
  let arr = [...str.matchAll(reg)];
  let k = [];
  for (let i = 0; i < arr.length; i++) {
    k.push(arr[i].slice(0, 3));
  }
  return k;
}

