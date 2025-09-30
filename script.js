// Récupération des différents éléments
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const submitBtn = document.querySelector(".submit__btn");

// Création de la variable usernameValue et de la variable passwordValue
let usernameValue;
let passwordValue;

submitBtn.disabled = true;

// Ecoute de l'événement input sur le champ de formulaire ayant l'Id username
username.addEventListener("input", (e) => {
  usernameValue = e.target.value;
  const node = username.parentNode;
  node.classList.remove("error");
  node.classList.remove("valid");
  if (usernameValue.length < 6) {
    node.classList.add("error");
    submitBtn.disabled = true;
  } else {
    node.classList.add("valid");
    submitBtn.disabled = false;
  }
});

// Ecoute de l'événement input sur le champ de formulaire ayant l'Id password
password.addEventListener("input", (e) => {
  passwordValue = e.target.value;
  const node = password.parentNode;
  node.classList.remove("error");
  node.classList.remove("valid");
  if (passwordValue.length < 8) {
    node.classList.add("error");
    submitBtn.disabled = true;
  } else {
    node.classList.add("valid");
    submitBtn.disabled = false;
  }
});
