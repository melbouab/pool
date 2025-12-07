// function repeat(str, num) {
//   let t = "";
//   for (let i = 0; i < num; i++) {
//     t += str;
//   }
//   return t;
// }
function repeat(str, num) {
  let t = "";
  if (num === 0) return "";
  return t + str + repeat(str, num - 1);
}
