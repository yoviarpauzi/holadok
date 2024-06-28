const header = document.getElementById("header"),
  navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

window.addEventListener("scroll", function (event) {
  let scroll = this.scrollY;
  if (scroll > 10) {
    header.classList.add("header__background");
  } else {
    header.classList.remove("header__background");
  }
});

navToggle.addEventListener("click", function () {
  navMenu.classList.add("show__menu");
});

navClose.addEventListener("click", function () {
  navMenu.classList.remove("show__menu");
});
