let day = 1000 * 60 * 60 * 24;
const count = (futur, past) => past / day - futur / day;

const dayOfTheYear = (date) => {
  let y = date.getUTCFullYear();
  let cur = new Date(0);
  cur.setUTCFullYear(y, 0, 1);
  let cnt = count(cur, date);
  return cnt + 1;
};
console.log(dayOfTheYear(new Date("1600-12-31")));
