function citiesOnly(arr) {
  let city = arr.map((el) => el.city);
  return city;
}
function upperCasingStates(arr) {
  let capi = arr.map((el) => {
    let tol = el
      .toLowerCase()
      .split(" ")
      .map((cu) => cu[0].toUpperCase() + cu.slice(1))
      .join(" ");
    return tol;
  });
  return capi;
}

function fahrenheitToCelsius(arr) {
  let mapping = arr.map((el) => {
    let num = 5 / 9;
    console.log(el.split("°")[0]);

    let convert = Math.floor((+el.split("°")[0] - 32) * num);
    return convert + "°C";
  });
  return mapping;
}

function trimTemp(arr) {
  let ar = arr.map((el) => {
    let obj = { ...el };
    obj["temperature"] = obj.temperature.split(" ").join("");

    return obj;
  });
  return ar;
}

function tempForecasts(arr) {
  let result = arr.map((el) => {
    let num = 5 / 9;
    let temp =
      Math.floor((el.temperature.replace(" ", "").split("°")[0] - 32) * num) +
      "°Celsius";
    let low = el.state
      .toLowerCase()
      .split(" ")
      .map((cu) => cu[0].toUpperCase() + cu.slice(1))
      .join(" ");
    
    let re = `${temp} in ${el.city}, ${low}`;
    return re;
  });
  return result;
}
