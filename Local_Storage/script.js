let form = document.querySelector("form");
let main = document.querySelector(".main");

form.addEventListener("submit", (event) => {
  let name = event.target.uname.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;

  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  console.log(userData);

  userData.push({
    name,
    email,
    phone,
  });

  localStorage.setItem("userDetails", JSON.stringify(userData));

  displayData();
  event.target.reset();
  event.preventDefault();
});

let displayData = () => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  let finalData = "";
  userData.forEach((element, index) => {
    finalData += `
     <div class="items">
        <span onClick='removeData(${index})'>&times</span>
        <h5>Name</h5>
        <div>${element.name}</div>

        <h5>Email</h5>
        <div>${element.email}</div>

        <h5>Phone</h5>
        <div>${element.phone}</div>
      </div>
   `;
  });
  main.innerHTML = finalData;
};

let removeData = (index) => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  userData.splice(index, 1);
  localStorage.setItem("userDetails", JSON.stringify(userData));
  displayData();
};

displayData();
