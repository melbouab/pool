function round(num) {
  if (math(num)[1] >= 0.5 && math(num)[0] >= 0) return math(num)[0] + 1;
  if (math(num)[1] >= 0.5 && math(num)[0] < 0) return math(num)[0] - 1;
  return math(num)[0];
}
function ceil(num) {
  if (math(num)[1] == 0) return num;
  if (math(num)[1] >= 0.0 && math(num)[0] >= 0) return math(num)[0] + 1;
  if (math(num)[1] >= 0.0 && math(num)[0] < 0) return math(num)[0];
  return math(num)[0];
}
function floor(num) {
  if (math(num)[1] == 0) return num;
  return math(num)[0] >= 0 ? math(num)[0] : math(num)[0] - 1;
}
function trunc(num) {
  if (math(num)[1] == 0) return num;

  return math(num)[0];
}
function math(num) {
  let rest = 0;
  let b = false;

  if (num >= 68719476735) {
    b = true;
    num -= 68719476735;
  }
  let f = false;
  if (num < 0) {
    num = -num;
    f = true;
  }
  while (num >= rest) {
    rest++;
  }
  let k = num - rest + 1;
  if (f) {
    rest = -rest + 1;
  } else {
    rest = rest - 1;
  }
  if (b) {
    return [rest + 68719476735, k];
  }
  return [rest, k];
}
