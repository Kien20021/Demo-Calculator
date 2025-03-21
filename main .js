const displayNumber = document.getElementById("display");
const square = document.getElementById("square");

function handleClickKey(value) {
  displayNumber.value += value;
}
function handleClear() {
  displayNumber.value = "";
}
function handleCalculate() {
  displayNumber.value = eval(displayNumber.value);
}

function handleSquare() {
  const value = parseFloat(displayNumber.value);
  displayNumber.value = value * value;
}
function handleSqrt() {
  const value = parseFloat(displayNumber.value);
  displayNumber.value = Math.sqrt(value);
}
