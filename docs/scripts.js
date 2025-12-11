<script>
    let lastScrollPosition = 0;
    const navbar1 = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > lastScrollPosition) {
            // El usuario está desplazándose hacia abajo
            navbar1.classList.add('hidden');
        } else {
            // El usuario está desplazándose hacia arriba
            navbar1.classList.remove('hidden');
        }

        lastScrollPosition = currentScrollPosition;
    });

    const navbar2 = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar2.classList.remove('scrolled');
    } else {
        navbar2.classList.add('scrolled');
    };
    });
</script>
