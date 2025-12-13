<script>
    function updateNavbarMode() {
        const ratio = window.innerWidth / window.innerHeight;

        if (ratio <= 4 / 3) {
            document.body.classList.add("compact-nav");
        } else {
            document.body.classList.remove("compact-nav", "menu-open");
        }
    }

    const menuBtn = document.getElementById("menuBtn");
    const overlay = document.getElementById("overlay");

    menuBtn.addEventListener("click", () => {
        document.body.classList.toggle("menu-open");
    });

    overlay.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
    });

    window.addEventListener("resize", updateNavbarMode);
    window.addEventListener("load", updateNavbarMode);

</script>
