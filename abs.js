function isPositive(a) {
  if (a > 0) return true;
  return false;
}
function abs(a) {
  if (a === 0) return 0;
  if (isPositive(a)) return a;
  return -a;
}
