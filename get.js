function get(src, path) {
  let t = path.split(".");
  for (let i = 0; i < t.length; i++) {
    src = src[t[i]];
    if (src === undefined) return undefined;
  }
  return src;
}
