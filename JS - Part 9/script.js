let h = document.all[6];
h.innerHTML = "Peter Parker";

let paras = document.getElementsByClassName("descp");

// console.log(document.getElementsByClassName("descp")[0]);

for (let i = 0; i < paras.length; i++) {
  // console.dir(paras[i]);
  // console.dir(paras[i].src) - incase I have an image;
  console.dir(paras[i].textContent);
}
