function adder(arr, num = 0) {
  return arr.reduce((pre, cur) => pre + cur, num);
}
function sumOrMul(arr, n = 0) {
  let num = arr.reduce((pre, cur) => {
    if (cur % 2 === 0) {
      return pre * cur;
    } else {
      return pre + cur;
    }
  }, n);
  return num;
}

function funcExec(arr, num = 0) {
  return arr.reduce((pre, cur) => cur(pre), num);
}
