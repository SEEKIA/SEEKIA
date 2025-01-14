// Botón "Ir arriba"
document.addEventListener("DOMContentLoaded", () => {
    const goToTopButton = document.createElement("button");
    goToTopButton.textContent = "↑";
    goToTopButton.classList.add("go-to-top");
    document.body.appendChild(goToTopButton);

    goToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            goToTopButton.style.display = "block";
        } else {
            goToTopButton.style.display = "none";
        }
    });

    // Menú hamburguesa
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });

        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                menu.classList.remove("show");
            });
        });
    }

    // Animaciones al hacer scroll
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        },
        { threshold: 0.2 }
    );

    // Observa los elementos con clase 'animate'
    const animatedElements = document.querySelectorAll(".animate");
    animatedElements.forEach((el) => observer.observe(el));
});
