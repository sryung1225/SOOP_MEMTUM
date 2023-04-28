const loginBoard = document.querySelector(".loginboard");
const loginForm = loginBoard.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const dashBoard = document.querySelector(".dashboard");
const greeting = dashBoard.querySelector(".greeting .name");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginBoard.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = username;
  loginBoard.classList.add(HIDDEN_CLASSNAME);
  dashBoard.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginBoard.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
