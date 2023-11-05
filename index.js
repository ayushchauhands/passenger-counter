// camelCase
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(countEl);
console.log(saveEl);

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

function save() {
  let countStr = " " + count + " -";
  saveEl.textContent += countStr;
  console.log(count);
  count = 0;
  countEl.textContent = 0;
}
