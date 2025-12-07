const is = {};
is.num = function (arg) {
  return typeof arg === "number";
};
is.nan = function (arg) {
  return Number.isNaN(arg);
};
is.str = function (str) {
  return typeof str === "string";
};
is.bool = function (arg) {
  return arg === true || arg === false;
};
is.undef = function (arg) {
  return arg === undefined;
};
is.def = function (arg) {
  return arg !== undefined;
};
is.arr = function (arr) {
  return Array.isArray(arr);
};
is.obj = function (obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
};
is.fun = function (fn) {
  return typeof fn === "function";
};
is.truthy = function (arg) {
  let table = [false, 0, "", undefined, NaN, null];
  return !table.includes(arg);
};

is.falsy = function (arg) {
  let table = [false, 0, "", undefined, NaN, null];
  return table.includes(arg);
};
