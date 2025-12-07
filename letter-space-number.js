function letterSpaceNumber(str) {
  let reg = /[a-zA-Z]\s\d(?![0-9a-zA-Z])/g;
  return str.match(reg) || [];
}
