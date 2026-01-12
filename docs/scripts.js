const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

overlay.addEventListener("click", () => {
  document.body.classList.remove("menu-open");
});

let ultimoScroll = window.scrollY;
const nav = document.querySelector(".menu-desktop");
const nav0 = document.querySelector(".logo");

window.addEventListener("scroll", () => {
  const scrollActual = window.scrollY;

  if (scrollActual > ultimoScroll && scrollActual > 20) {
    nav.classList.add("oculta");
    nav0.classList.add("oculta");
  } else {
    nav.classList.remove("oculta");
    nav0.classList.remove("oculta");
  }

  ultimoScroll = scrollActual;
});
