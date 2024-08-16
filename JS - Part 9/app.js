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
  console.log(links[i].innerText);
}
