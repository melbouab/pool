let daysofweek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let secondDays = daysofweek.map((day) => "second" + day);
let days = [...daysofweek, ...secondDays];
const count = (futur, past) =>
  past / 1000 / 60 / 60 / 24 - futur / 1000 / 60 / 60 / 24;
function addWeek(date) {
  let time = new Date("0001-01-01");

  let t = count(time, date);
  console.log(t);

  while (t >= 14) {
    t = t - 14;
  }
  return days[t];
}

function timeTravel(obj) {
  let date = `${obj.date.getFullYear()}-${String(
    obj.date.getMonth() + 1
  ).padStart(2, "0")}-${String(obj.date.getDate()).padStart(2, "0")} ${
    obj.hour
  }:${obj.minute}:${obj.second}`;
  return new Date(date);
}

