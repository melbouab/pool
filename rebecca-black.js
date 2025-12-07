function isFriday(date) {
  let day = date.getDay();
  return day === 5;
}

function isWeekend(date) {
  let day = date.getDay();
  return day === 6 || day === 0;
}
function isLeapYear(date) {
  let year = date.getFullYear();
  return year % 4 === 0 && year % 100 != 0;
}
function isLastDayOfMonth(date) {
  let month = date.getMonth();
  date.setDate(date.getDate() + 1);
  return date.getMonth() !== month;
}
