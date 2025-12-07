function indexOf(array, value, searbigin = 0) {
  for (let i = searbigin; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}
function lastIndexOf(array, value, searbigin = array.length - 1) {
  let j = -1;

  for (let i = searbigin; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return j;
}
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
}
