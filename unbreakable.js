function split(str, sub) {
  let t = [];
  let p = "";
  if (sub.length === 0) return [...str];
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + sub.length) === sub) {
      t.push(p);
      i += sub.length - 1;
      p = "";
    } else {
      p += str[i];
    }
  }
  t.push(p);
  return t;
}

function join(str, sub) {
  let p = "";

  for (let i = 0; i < str.length; i++) {
    p += str[i];
    if (i !== str.length - 1) p += sub;
  }
  return p;
}
