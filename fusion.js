function fusion(...objs) {
  const getType = (val) => Object.prototype.toString.call(val).slice(8, -1);
  let result = {};

  for (const obj of objs) {
    for (const key in obj) {
      const val = obj[key];

      if (!result.hasOwnProperty(key)) {
        result[key] = val;
      } else {
        const type1 = getType(result[key]);
        const type2 = getType(val);

        if (type1 !== type2) {
          result[key] = val;
        } else {
          switch (type1) {
            case "Number":
              result[key] += val;
              break;
            case "String":
              result[key] += " " + val;
              break;
            case "Array":
              result[key] = [...result[key], ...val];
              break;
            case "Object":
              result[key] = fusion(result[key], val);
              break;
            default:
              result[key] = val;
          }
        }
      }
    }
  }
  return result;
}
