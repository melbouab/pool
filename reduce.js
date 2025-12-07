// const adder = (a, b) => a + b;
function fold(arr, fn, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
    console.log(acc);
  }
  return acc;
}
function foldRight(arr, fn, acc) {
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}
function reduce(arr, fn) {
  let acc = arr[0];
  for (let i = 1; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
    console.log(acc);
  }
  return acc;
}

function reduceRight(arr, fn) {
  let acc = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}
// console.log(reduce([1, 2, 3], adder));
