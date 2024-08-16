/*
let btns = document.querySelectorAll("button");

//btn.onclick = clicked; // clicked function is assigned as event handler

// btn.onmouseenter = entered;

for (btn of btns) {
  // btn.onclick = entered;
  // btn.onclick = clicked;

  btn.addEventListener("click", entered);
  btn.addEventListener("click", clicked);
}

function entered() {
  console.log("Event triggered.");
}

function clicked() {
  console.log("Button was clicked");
}
*/

let btn = document.querySelector("button");
let div = document.querySelector("div");
let h3 = document.querySelector("h3");

btn.addEventListener("click", function () {
  let randomColor = generateColor();
  h3.innerText = randomColor;
  div.style.backgroundColor = randomColor;
});

function generateColor() {
  let red = Math.floor(Math.random() * 255);

  let green = Math.floor(Math.random() * 255);

  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red},${green}, ${blue})`;
  return color;
}
