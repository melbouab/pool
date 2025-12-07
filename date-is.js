function isValid(date) {
  if (isNaN(date) || typeof date === "string") return false;
  return true;
}
function isAfter(date1, date2) {
  return isValid(date1) && isValid(date2) && date1 > date2;
}

function isBefore(date1, date2) {
  return isValid(date1) && isValid(date2) && date2 > date1;
}
function isFuture(date) {
  return isValid(date) && new Date().getTime() < date.getTime();
}
function isPast(date) {
  return isValid(date) && date.getTime() < new Date();
}
