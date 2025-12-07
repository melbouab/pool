function filterShortStateName(arr) {
  return arr.filter((el) => el.length < 7);
}
function filterStartVowel(arr) {
  return arr.filter((el) => /[aeuio]/i.test(el[0]));
}
function filter5Vowels(arr) {
  return arr.filter((el) => {
    let k = 0;
    for (let i = 0; i < el.length; i++) {
      if (/[aeuio]/i.test(el[i])) {
        k++;
      }
    }
    if (k >= 5) return el;
  });
}

function filter1DistinctVowel(arr) {
  return arr.filter(
    (el) => [...new Set(el.toLowerCase().match(/[auioe]/g))].length == 1
  );
}

function multiFilter(arr) {
  let n = arr.filter(
    (el) =>
      el.capital.length >= 8 &&
      el.name.match(/^[^aeuio]/i) &&
      el.tag.match(/[aeuio]$/i) &&
      el.region !== "South"
  );
  return n;
}
