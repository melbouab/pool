// function ionOut(str) {
//   let sp = str.split(/\s/).filter((el) => el.match(/.?tion/)).map((el) => el.replace(/ion.?/, ""));
//   return sp;
// }
console.log(ionOut("attention, direction"));
function ionOut(str) {
  let l = /[\w]+t(?=ion)/g;
  return str.match(l);
}
