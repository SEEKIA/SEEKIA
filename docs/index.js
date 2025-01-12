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

    document.querySelectorAll("section").forEach((section) => {
        section.classList.add("hidden");
        observer.observe(section);
    });

    // Cambio de tema claro/oscuro
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "Cambiar Tema";
    themeToggle.classList.add("theme-toggle");
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // Estilos adicionales para el botón y las animaciones
    const style = document.createElement("style");
    style.textContent = `
        .go-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #6d6c6c;
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            cursor: pointer;
            display: none;
            z-index: 1000;
        }
        .theme-toggle {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: #6d6c6c;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 15px;
            cursor: pointer;
            z-index: 1000;
        }
        body.dark-theme {
            background-color: #333;
            color: #f9f9f9;
        }
        body.dark-theme a {
            color: #f9f9f9;
        }
        section.hidden {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s, transform 0.5s;
        }
        section.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});
