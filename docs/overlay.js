const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");
const body = document.body;

if (!menuBtn) throw new Error("No se encontró #menuBtn");
if (!overlay) throw new Error("No se encontró #overlay");

menuBtn.addEventListener("click", () => {
  const isOpen = body.classList.toggle("menu-open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

overlay.addEventListener("click", () => {
  body.classList.remove("menu-open");
  menuBtn.setAttribute("aria-expanded", "false");
});

/* --- Opcional: clonar links del desktop al mobile si quieres coherencia --- */
/* Ejecuta esto solo si quieres que los mismos links estén en ambos menús */
(function cloneLinksToMobile(){
  const desktop = document.querySelector(".menu-desktop");
  const mobile = document.querySelector(".menu-mobile");
  if (desktop && mobile && mobile.children.length === 0) {
    // clona todos los anchors del desktop
    const anchors = desktop.querySelectorAll("a");
    anchors.forEach(a => {
      const clone = a.cloneNode(true);
      mobile.appendChild(clone);
    });
  }
})();
