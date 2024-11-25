// JS Average Calculaotr
// This site will calculate the average of 3 numbers

//HTML Element vars
var input1El = document.getElementById("input1");
var input2El = document.getElementById("input2");
var input3El = document.getElementById("input3");
var avgBtnEl = document.getElementById("avg-btn");
var avgOutEl = document.getElementById("avg-out");
// Pizza

var pizzaDropDown = document.getElementById("pizza-size");

// Event Litsener
avgBtnEl.addEventListener("click", calcAverage);

// Pizza Event Litsener
pizzaDropDown.addEventListener("change", showPizza);

// Event Function
function calcAverage() {
  //Input: Save 3 numbers into variables
  let num1 = Number(input1El.value); // or +input1El.value
  let num2 = Number(input2El.value);
  let num3 = Number(input3El.value);

  //Process: Calculate average, round the result to 1 decimal place
  let average = (num1 + num2 + num3) / 3;
  average = average.toFixed(1);

  //Output: Display answer where thet dashes are
  avgOutEl.innerHTML = average;

  //Clear Inputs
  input1El.value = "";
  input2El.value = "";
  input3El.value = "";

  //Change Style
  input1El.style.backgroundColor = "lightgreen";
  avgOutEl.style.border = "3px dashed maroon";
  avgOutEl.style.padding = "5px 10px";
}

function showPizza() {
  // Read pizza size into variable
  let size = pizzaDropDown.value;

  // Make output sentence
  let output = `Your ${size} pizza will be ready soon!`;

  // Output to site
  document.getElementById("pizza-out").innerHTML = output;
}
