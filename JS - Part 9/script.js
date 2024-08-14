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
