function filter(arr, fn) {
  let l = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) l.push(arr[i]);
  }
  return l;
}
function reject(arr, fn) {
  let l = [];
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) l.push(arr[i]);
  }
  return l;
}
function partition(arr, fn) {
  let l = [];
  let k = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) l.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) k.push(arr[i]);
  }
  return [l, k];
}
