function arrToSet(array) {
  return new Set(array);
}
function arrToStr(array) {
  return array.join("");
}
function setToArr(set) {
  return [...set];
}
function setToStr(set) {
  return [...set].join("");
}
function strToArr(string) {
  return [...string];
}
function strToSet(string) {
  return new Set(string);
}
function mapToObj(map) {
  return Object.fromEntries(map);
}
function objToArr(obj) {
  return [...Object.values(obj)];
}
function objToMap(obj) {
  return new Map(Object.entries(obj));
}
function arrToObj(array) {
  return { ...array };
}
function strToObj(str) {
  return Object.fromEntries([...str].entries());
}
function superTypeOf(value) {
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  return Object.prototype.toString.call(value).slice(8, -1);
}
console.log(arrToObj([1, 2]));
