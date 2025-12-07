let vowels = /[aeuio]/gi;
function vowelDots(str) {
  let t = str.replace(vowels, "$&" + ".");
  return t;
}
