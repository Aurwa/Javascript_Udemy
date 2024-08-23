let h2 = document.querySelector("h2");
let btns = ["red", "yellow", "green", "purple"]; // btnColor
let allBtns = document.querySelectorAll(".btn");

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
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randomIdx];
  gameSeq.push(randColor);
  console.log("game Seq:", gameSeq);

  let randBtn = document.querySelector(`.${randColor}`);
  gameFlash(randBtn);
}

// function gameFlash
function gameFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 400);
}

// function userFlash
function userFlash(btn) {
  btn.classList.add("userFlash");

  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 400);
}

// function btnPress
function btnPress() {
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log("User seq: ", userSeq);

  checkAns(userSeq.length - 1);
}

for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
  if (gameSeq[idx] == userSeq[idx]) {
    if (gameSeq.length == userSeq.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    h2.innerHTML = `Game Over. Press any key to start!`;
  }
}
