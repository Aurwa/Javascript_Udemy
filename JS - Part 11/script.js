/*
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lists = document.querySelectorAll("li");

div.addEventListener("click", function () {
  console.log("Div was clicked.");
});

ul.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Ul was clicked.");
});

for (let li of lists) {
  li.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Li was clicked.");
  });
}
*/

/*
let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let deleteBtns = document.querySelectorAll(".delete");

btn.addEventListener("click", function () {
  let inpValue = input.value;

  // inpValue = ""

  // you're trying to clear the value of a variable (inpValue) instead of directly clearing the value of the input element (input.value). Changing the value of inpValue doesn't affect the input field itself because inpValue is just a copy of the input's value, not a reference to the input field.


  let newTask = document.createElement("li");
  newTask.innerText = inpValue;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  newTask.appendChild(delBtn);
  ul.appendChild(newTask);
  input.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let parent = event.target.parentElement;
    parent.remove();
  }
});
*/

// event delegation
/*

document.querySelector("#form").addEventListener("keyup", function (e) {
  if (e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
*/

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let delButtons = document.querySelectorAll(".delete");

btn.addEventListener("click", function () {
  let inputVal = input.value;
  let newLi = document.createElement("li");
  newLi.innerText = inputVal;

  let delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.innerText = "delete";

  newLi.appendChild(delBtn);
  ul.appendChild(newLi);
  input.value = "";
});

// for (deleteButton of delButtons) {
//   deleteButton.addEventListener("click", function (e) {
//     let parent = this.parentElement;
//     parent.remove();
//   });
// }

ul.addEventListener("click", function (e) {
  let parent = e.target.parentElement;
  if (e.target.tagName == "BUTTON") {
    parent.remove();
  }
});
