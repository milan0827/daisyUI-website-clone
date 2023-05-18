const logo = document.querySelector(".logo");
const nav = document.querySelector(".nav");
const background = document.querySelector(".background");
const numbers = document.querySelector(".page__stats--details");

const click = logo.addEventListener("click", () => {
  nav.classList.add("nav__active");
  background.classList.add("overlay");
});

background.addEventListener("click", () => {
  nav.classList.remove("nav__active");
  background.classList.remove("overlay");
  nav.style.transition = "all 0.4s";
});
