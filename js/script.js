var login = document.querySelector(".login-link");
var adress = document.querySelector(".contacts-button-map");
var popupLogin = document.querySelector(".modal-login");
var popupMap = document.querySelector(".modal-map");
var closeLogin = document.querySelector(".modal-login-close");
var closeMap = document.querySelector(".modal-map-close");

login.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.add("modal-show");
});

closeLogin.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.remove("modal-show");
});

adress.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});
