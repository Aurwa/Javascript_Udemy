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
