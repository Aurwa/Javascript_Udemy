let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("blue", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000);
//     });
//   });
// });

function changeColor2(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

// let requestPromise = changeColor2("red", 1000);
// console.log(requestPromise);

changeColor2("red", 1000)
  .then(() => {
    console.log("Red Color completed");
    return changeColor2("purple", 1000);
  })
  .then(() => {
    console.log("Purple color completed");
    return changeColor2("orange", 1000);
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

// function saveData(data) {
//   return new Promise((success, failure) => {
//     let speed = Math.floor(Math.random() * 10) + 1;
//     if (speed > 4) {
//       success("data was saved");
//     } else {
//       failure("failure: weak connection");
//     }
//   });
// }

// saveData("apna College")
//   .then((result) => {
//     console.log("Success Promise 1");
//     console.log(result);

//     return saveData("hello world");
//   })
//   .then((result) => {
//     console.log("Success Promise 2");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("Fail Promise");
//     console.log(error);
//   });

// saveData("apna College")
//   .then(() => {
//     console.log("Success Promise 1");
//     saveData("hello world").then(() => {
//       console.log("Success Promise 2");
//     });
//   })
//   .catch(() => {
//     console.log("Fail Promise");
//   });
