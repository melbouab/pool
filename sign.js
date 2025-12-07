function sign(arg) {
  if (arg > 0) return 1;
  if (arg < 0) return -1;
  if (arg === 0) return 0;
}
function sameSign(a, b) {
  let t = sign(a) === sign(b);
  return t;
}
