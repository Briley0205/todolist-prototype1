const loginBox = document.querySelector(".login-form");
const loginForm = document.querySelector("#login-form__form");
const nameForm = document.querySelector("#login-form__username");
const USERNAME_KEY = "username";

function handleLoginSubmit(event) {
    event.preventDefault();
    const username = nameForm.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginBox.classList.add("hidden");
}

loginForm.addEventListener("submit", handleLoginSubmit);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginBox.classList.remove("hidden");
} 
