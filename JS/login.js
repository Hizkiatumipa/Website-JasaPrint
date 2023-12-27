// Login
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("login-name").value;
  const password = document.getElementById("login-password").value;
  const allowedUsernames = ["user"];

  if (allowedUsernames.includes(username) && password === "user") {
    window.location.href = "home.html";
  } else {
    alert("Username atau password yang anda masukan salah");
  }
});