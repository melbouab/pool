function multiply(a, b) {
  if (b < 0) {
    a = -a;
    b = -b;
  }
  if (b === 1) return a;
  return a + multiply(a, b - 1);
}
function divide(a, b) {
  let k = a;
  let j = b;
  if (b < 0) b = -b;
  if (a < 0) a = -a;
  if (a < b) return 0;
  return multiply(sameSign(k, j) ? 1 : -1, 1 + divide(a - b, b));
}

function modulo(a, b) {
  let k = a;
  if (b < 0) b = -b;
  if (a < 0) a = -a;
  if (a < b) return a;
  return multiply(sameSign(k, 1) ? 1 : -1, modulo(a - b, b));
}
function sign(arg) {
  if (arg > 0) return 1;
  if (arg < 0) return -1;
  if (arg === 0) return 0;
}
function sameSign(a, b) {
  let t = sign(a) === sign(b);
  return t;
}
console.log(multiply(4, 0));
