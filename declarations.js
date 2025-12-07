const escapeStr = "`\\/\"'";
const arr = [4, "2"];
const obj = {
  str: "hello",
  num: 5,
  bool: true,
  undef: undefined,
};
const nested = {
  arr: [4, undefined, "2"],
  obj: {
    str: "hi",
    num: 4,
    bool: true,
  },
};
Object.freeze(nested);
Object.freeze(nested.obj);
Object.freeze(nested.arr);
Object.freeze(obj);
Object.freeze(arr);

obj.get