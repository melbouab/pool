function matchCron(str, date) {
  let st = { ...[...str.split(" ")] };
  let newDat = new Date(date);
  let times = [
    newDat.getMinutes(),
    newDat.getHours(),
    newDat.getDate(),
    newDat.getMonth() + 1,
    newDat.getDay(),
  ];
  for (let [k, v] of Object.entries(st)) {
    if (v !== "*") {
      let num = Number(k);
      if (times[num] != v) {
        return false;
      }
    }
  }
  return true;
}
console.log(matchCron("9 * * * *", new Date("2020-05-30 18:09:00"))); // -> true
// matchCron("9 * * * *", new Date("2020-05-30 19:09:00")); // -> true
matchCron("9 * * * *", new Date("2020-05-30 19:21:00")); // -> false
