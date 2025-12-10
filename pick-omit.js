function pick(obj, keys) {
  console.log(obj);

  let all = {};
  if (Array.isArray(keys)) {
    for (let i = 0; i < keys.length; i++) {
      if (obj[keys[i]] !== undefined) {
        all[keys[i]] = obj[keys[i]];
      }
    }
  }
  if (typeof keys === "string") {
    if (obj[keys] === undefined) {
      return {};
    }
    all[keys] = obj[keys];
    return all;
  }
  return all;
}

function omit(obj, keys) {
  //   console.log(obj);

  let all = {};
  if (Array.isArray(keys)) {
    let objkeys = Object.keys(obj);
    console.log(objkeys);

    for (let i = 0; i < objkeys.length; i++) {
      if (!keys.includes(objkeys[i])) {
        console.log("h");

        all[objkeys[i]] = obj[objkeys[i]];
      }
    }
  }
  if (typeof keys === "string") {
    for (const [k, v] of Object.entries(obj)) {
      if (k !== keys) {
        all[k] = v;
      }
    }
    return all;
  }
  return all;
}

console.log(
  omit({ drill: "bosh", grinders: "DeWalt", saws: " Makita" }, [
    "grinders",
    "saws",
  ])
);
