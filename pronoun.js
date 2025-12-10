function pronoun(str) {
  const prs = ["i", "you", "he", "she", "it", "they", "we"];
  const words = str.toLowerCase().split(/[\s,\.]+/);
  const res = {};

  for (let i = 0; i < words.length; i++) {
    const w = words[i];

    if (prs.includes(w)) {
      if (!res[w]) res[w] = { word: [], count: 0 };
      res[w].count++;

      const next = words[i + 1];
      if (next && !prs.includes(next)) {
        res[w].word.push(next);
      }
    }
  }
  return res;
}

const ex =
  "Using Array Destructuring, you you can iterate through objects easily.";
console.log(pronoun(ex));
