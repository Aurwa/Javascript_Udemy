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

/*
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
*/

let btn = document.querySelector("button");
let div = document.querySelector("div");
let h3 = document.querySelector("h3");

btn.addEventListener("click", function () {
  let randomColor = changeColor();
  div.style.backgroundColor = randomColor;
  h3.innerText = randomColor;
});

function changeColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red},${green},${blue})`;
  return color;
}

/*
Event Handler Assignment (e.g., btn.onclick = clicked;):
In the previous example, you assigned a function to handle an event. You want the function to be called later when the event occurs (e.g., when the button is clicked). Therefore, you use btn.onclick = clicked; without the parentheses, because you're only assigning the function itself, not calling it immediately.

Function Call and Assignment (e.g., let randomColor = generateColor();):
Here, you're calling the generateColor function to immediately execute it and retrieve the result. You need the result right away to use in your code (to update the text and background color). Hence, you use parentheses to invoke the function.
*/

/*
let testBtn = document.querySelector("#btn");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

p.addEventListener("click", changeCol);
testBtn.addEventListener("click", changeCol);

function changeCol() {
  console.log(this);
  this.style.backgroundColor = "red";
}
*/

// Keyboard Events
// let inp = document.querySelector("input");
// let btn2 = document.querySelector("#btn");
// let form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let user = this.elements[0];
//   let password = form.elements[1];
//   console.log(user.value);
//   console.log(password.value);
// });

// inp.addEventListener("keydown", function (e) {
//   console.log(e);
//   console.log(e.key);
//   console.log(e.code);
// });

/*
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

let user = document.querySelector("#user");
user.addEventListener("input", function () {
  console.log("Value changed: ", user.value);
});
*/

/*
let para = document.querySelector("#para");
let inp = document.querySelector("#text");

inp.addEventListener("input", function () {
  // console.log(inp.value);
  let val = inp.value;
  para.innerText = val;
});
*/

// let changeBtn = document.querySelector("#color");
// changeBtn.addEventListener("click", function () {
//   changeBtn.style.backgroundColor = "green";
// });

let nameInput = document.querySelector("#name");
let nameHeading = document.querySelector("#nameHead");

nameInput.addEventListener("input", function () {
  let filteredInput = nameInput.value.replace(/[^a-zA-Z\s]/g, "");

  // replace(/[^a-zA-Z\s]/g, '')

  nameHeading.innerText = filteredInput;
});
