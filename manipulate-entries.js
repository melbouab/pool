function filterEntries(obj, fn) {
  let o = {};
  for (const [k, v] of Object.entries(obj)) {
    if (fn([k, v])) {
      o[k] = v;
    }
  }
  return o;
}

function mapEntries(obj, fn) {
  let o = {};
  for (const [k, v] of Object.entries(obj)) {
    let [a, b] = fn([k, v]);
    o[a] = b;
  }
  return o;
}

function reduceEntries(obj, fn, acc) {
  for (const [k, v] of Object.entries(obj)) {
    acc = fn(acc, [k, v]);
  }
  return acc;
}

function totalCalories(cart) {
  return Number(
    reduceEntries(
      cart,
      (acc, [key, grams]) => {
        const caloriesPerGram = nutritionDB[key].calories / 100;
        return acc + caloriesPerGram * grams;
      },
      0
    ).toFixed(1)
  );
}

function lowCarbs(cart) {
  return filterEntries(cart, ([key, grams]) => {
    const carbsPerGram = nutritionDB[key].carbs / 100;
    const totalCarbs = carbsPerGram * grams;
    return totalCarbs < 50;
  });
}

function cartTotal(cart) {
  return mapEntries(cart, ([key, grams]) => {
    const productStats = nutritionDB[key];
    const newStats = {};

    for (const [nutrient, value] of Object.entries(productStats)) {
      const calculatedValue = (value / 100) * grams;
      newStats[nutrient] = Math.round(calculatedValue * 1000) / 1000;
    }

    return [key, newStats];
  });
}