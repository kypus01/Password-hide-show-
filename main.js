let password = document.getElementById("password");
let visibility = document.querySelector(".visibility");
const show = () => {
  if (password.type === "password") {
    password.type = "text";
    visibility.style.color = "rgb(128,0,122)";
  } else {
    password.type = "password";
    visibility.style.color = "#fafafa";
  }
};

// const login = document.getElementById("login");
// const username=document.getElementById("username");

// login.addEventListener("click", () => {
//   if (username === "" || password === "") {
//     username.style.border = "1.3px solid red";
//   } else {return
//   }
// });
