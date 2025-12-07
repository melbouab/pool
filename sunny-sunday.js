const day = 1000 * 60 * 60 * 24;
let count = (cur, date) => date / day - cur / day;
function sunnySunday(date) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let l = count(new Date("0001-01-01"), date);
  console.log(l);

  while (l >= 6) {
    l -= 6;
  }
  return days[l];
}
