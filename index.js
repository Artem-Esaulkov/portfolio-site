const header = document.querySelector(".header");
const burgerIcon = document.querySelector(".about__burger-icon");
const page = document.querySelector("html");
const menuItems = document.querySelectorAll('.header__item');

const activateMenu = () => {
  header.style.animation = "header-active 1s";
  header.classList.add("header_active");
  page.style.overflowY = "hidden";
  header.style.overflowY = "scroll";
  burgerIcon.style.animation = "icon-active 1s";
  burgerIcon.classList.add("about__burger-icon_active");
  burgerIcon.removeEventListener("click", activateMenu);
  burgerIcon.addEventListener("click", closeMenu);
};

const closeMenu = () => {
  header.style.animation = "header-passive 1s";
  header.classList.remove("header_active");
  page.style.overflowY = "scroll";
  header.style.overflow = "visible";
  burgerIcon.style.animation = "icon-passive 1s";
  burgerIcon.removeEventListener("click", closeMenu);
  burgerIcon.classList.remove("about__burger-icon_active");
  burgerIcon.addEventListener("click", activateMenu);
};

burgerIcon.addEventListener("click", activateMenu);
menuItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
});

