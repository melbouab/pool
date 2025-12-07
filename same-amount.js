function sameAmount(str, reg1, reg2) {
  if (!reg1.flags.includes("g")) {
    reg1 = new RegExp(reg1, "g");
  }
  if (!reg2.global) {
    reg2 = new RegExp(reg2, "g");
  }
  let t = str.match(reg1) ? str.match(reg1).length : 0;
  let l = str.match(reg2) ? str.match(reg2).length : 0;
  return l === t;
}
