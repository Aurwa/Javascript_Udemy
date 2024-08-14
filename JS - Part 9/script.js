let h = document.all[6];
h.innerHTML = "Peter Parker";

let paras = document.getElementsByClassName("descp");

// console.log(document.getElementsByClassName("descp")[0]);

for (let i = 0; i < paras.length; i++) {
  // console.dir(paras[i]);
  // console.dir(paras[i].src) - incase I have an image;
  // console.dir(paras[i].textContent);
}

let boxes = document.querySelector("div a");
// console.log(boxes);

let img = document.querySelector("img");
// console.log(img.getAttribute("id"));

// img.setAttribute("id", "spiderManImg");
// console.log(img.getAttribute("id"));

let links = document.querySelectorAll(".box a");

// for (let i = 0; i < links.length; i++) {
//   links[i].style.color = "green";
// }

for (link of links) {
  link.style.color = "red";
}

let p = document.querySelector(".descp");

p.previousElementSibling.style.color = "orange";

let newP = document.createElement("p");
newP.innerText = "Hi I am the new P.";
console.dir(newP);
let body = document.querySelector("body");
body.appendChild(newP);

let box = document.querySelector(".box");
let btn = document.createElement("button");
btn.innerText = "Click me";
box.appendChild(btn);

newP.append(" Add more text!");
// newP.append(btn);
newP.prepend(btn);
