let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let btns = ["red", "purple", "yellow", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});

// function gameFlash
function gameFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}

// function userFlash
function userFlash(btn) {
  btn.classList.add("userFlash");

  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 500);
}

// function levelUp
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  // selecting random btn
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log("Game seq: ", gameSeq);

  gameFlash(randBtn);
}

// function checkAns (checkSeq)
function checkAns(idx) {
  // console.log("Current level: ", level);
  // let idx = level - 1;
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b>. <br>Press any key to start.</br>`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 400);
    reset();
  }
}

// function btnPress
function btnPress() {
  let btn = this;
  userFlash(btn); // whole button / div is being passed

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log("User seq: ", userSeq);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

// function reset()
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
