let counter = document.querySelector("#counter");
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let reset = document.querySelector("#reset");
let a = 0;

function inc() {
    counter.style.color="blue"
  counter.innerHTML = ++a;
}
function dic() {
  if (a <= 0) {
    counter.innerHTML = 0;
  } else {
    counter.innerHTML = --a;
  }
}
function res() {
  counter.innerHTML = 0;
  a = 0;
}

increment.addEventListener("click", inc);
decrement.addEventListener("click", dic);
reset.addEventListener("click", res);
