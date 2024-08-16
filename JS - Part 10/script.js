let btn = document.querySelector("button");

// function clicked() {
//   console.log("Button was clicked");
// }

//btn.onclick = clicked; // clicked function is assigned as event handler

function entered() {
  console.log("Event triggered.");
}

btn.onmouseenter = entered;
