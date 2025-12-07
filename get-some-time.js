function firstDayWeek(num, str) {
  let year = parseInt(str);
  let date = new Date(0);
  date.setFullYear(year, 0, 1);
  let day = date.getDay();
  day = day === 0 ? 7 : day;
  date.setDate(date.getDate() - (day - 1) + (num - 1) * 7);
  if (date.getFullYear() < year) {
    date.setFullYear(year, 0, 1);
  }
  return `${String(date.getDate()).padStart(2, "0")}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${str}`;
}
