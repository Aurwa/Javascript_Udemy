let h2 = document.querySelector("h2");
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let gameSeq = [];
let userSeq = [];

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    console.log("Game started");
    levelUp();
  }
});

// function levelUp()
function levelUp() {
  level++;
  h2.innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randomIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  btnFlash(randBtn);
}

// function btnFlash
function btnFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 400);
}
