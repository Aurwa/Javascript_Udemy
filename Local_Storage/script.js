let form = document.querySelector("form");

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
  // console.log(userData);
  event.preventDefault();
});
