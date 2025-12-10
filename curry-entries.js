function defaultCurry(obj) {
  return function (l) {
    return { ...obj, ...l };
  };
}


function reduceCurry(fn) {
  return function (personel, acc = 0) {
    for (const [k, v] of Object.entries(personel)) {
      acc = fn(acc, [k, v]);
    }
    return acc;
  };
}
function filterCurry(fn) {
  return function (personel) {
    let o = {};
    for (const [k, v] of Object.entries(personel)) {
      if (fn([k, v])) {
        o[k] = v;
      }
    }
    return o;
  };
}

function reduceScore(personel, cur = 0) {
  let a = filterCurry(([k, v]) => personel[k].isForceUser)(personel);
  return reduceCurry((cur, [k, v]) => cur + v.pilotingScore + v.shootingScore)(
    a,
    cur
  );
}
function filterForce(personel) {
  console.log(personel);

  return filterCurry(
    ([k, v]) => personel[k].shootingScore >= 80 && v.isForceUser
  )(personel);
}
function mapCurry(fn) {
  return function (personel) {
    let ob = {};
    for (const [k, v] of Object.entries(personel)) {
      let [a, b] = fn([k, v]);
      ob[a] = b;
    }
    console.log();

    return ob;
  };
}

function mapAverage(p) {
  return mapCurry(([k, v]) => [
    k,
    { ...v, averageScore: (v.pilotingScore + v.shootingScore) / 2 },
  ])(p);
}


// console.log(reduceScore(personnel, 0));
console.log(mapAverage(personnel));
