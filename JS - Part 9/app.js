/*
console.dir(document.all);
console.dir(document.all[6]);
console.log(document.all[6]);

let paras = document.getElementsByClassName("descp");

for (let i = 0; i < paras.length; i++) {
  // console.log(paras[i].innerText);
}

let links = document.querySelectorAll(".box  a");

// for (link of links) {
//   console.log(link.innerText);
// }

for (let i = 0; i < links.length; i++) {
  // console.log(links[i].innerText);
  links[i].style.color = "red";
}
*/

let body = document.querySelector("body");

let container = document.querySelector(".container");

let redP = document.createElement("p");
redP.innerText = "Hey I am red";
redP.style.color = "red";
container.appendChild(redP);

let div = document.createElement("div");

let h1 = document.createElement("h1");
h1.innerText = "I am in inner Div";
div.appendChild(h1);
container.appendChild(div);
