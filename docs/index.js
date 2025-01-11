document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show"); // Mostrar/ocultar el menú
    });

    // Opcional: Cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("show");
        });
    });
});
