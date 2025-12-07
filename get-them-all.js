export function getArchitects() {
  let a = document.querySelectorAll("a");
  let b = document.querySelectorAll(":not(a)");
  return [a, b];
}
export function getClassical() {
  let a = document.querySelectorAll(".classical");
  let b = document.querySelectorAll(":not(.classical)");
  return [a, b];
}

export function getActive() {
  let a = document.querySelectorAll("a.classical.active");
  let b = document.querySelectorAll("a.classical:not(.active)");
  return [a, b];
}
export function getBonannoPisano() {
  let a = document.getElementById("BonannoPisano");
  let b = document.querySelectorAll("a.classical.active");
  return [a, b];
}
