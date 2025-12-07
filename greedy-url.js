function getURL(str) {
  let reg = /https?[:][/][/][^\s]+/g;
  return str.match(reg);
}
function greedyQuery(str) {
  let reg = /https?:[/][/][^\s?]+\?([^\s?=&]+=[^\s?=&]+&?){3,}/g;
  return str.match(reg);
}
function notSoGreedy(str) {
  
  let reg = /https?[:][/][/][^\s?]+\?(&?[^\s?=&]+=[^\s?=&]+){2,3}(?=\s)/g;
  return str.match(reg);
}
