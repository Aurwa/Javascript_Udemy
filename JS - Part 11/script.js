let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("blue", 1000);
});
// changeColor("purple", 2000);
// changeColor("green", 3000);

// function saveData(data, success, failure) {
//   let speed = Math.floor(Math.random() * 10) + 1;
//   if (speed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// saveData(
//   "Apna college",
//   () => {
//     console.log("Data was saved.");
//   },
//   () => {
//     console.log("Weak connection");
//   }
// );

function saveData(data) {
  return new Promise((success, failure) => {
    let speed = Math.floor(Math.random() * 10) + 1;
    if (speed > 4) {
      success("data was saved");
    } else {
      failure("failure: weak connection");
    }
  });
}

saveData("apna College")
  .then(() => {
    console.log("Success Promise");
  })
  .catch(() => {
    console.log("Fail Promise");
  });
