const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
});

overlay.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
});
