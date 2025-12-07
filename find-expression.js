// function findExpression(number) {
//   const add4 = "+4";
//   const mul2 = "*2";
//   let k = 1;
//   let t = "1";
//   let f = true;
//   while (k < number) {
//     if (!f) {
//       k = k + 4;
//       if (k > number) {
//         k = k - 4;
//         f = true;
//       } else {
//         t += add4;
//       }
//     }
//     k = k * 2;
//     if (k > number && k / 2 + 4 > number) {
//       k = k / 2;
//       f = false;
//     } else {
//       t += mul2;
//     }
//   }
//   return t;
// }
// console.log(findExpression(8));
