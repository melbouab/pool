function countLeapYears(date) {
  let year = date.getFullYear();
  let total = 0;
  for (let i = 1; i < year; i++) {
    if (i % 4 === 0) {
      total++;
    }
    if (i % 100 === 0 && i % 400 !== 0) {
      total--;
    }
  }
  return total;
}
console.log(countLeapYears(new Date("2048-12-08")));
