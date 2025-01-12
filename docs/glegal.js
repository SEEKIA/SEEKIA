document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-button");
    const tabs = document.querySelectorAll(".tab");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-tab");

            // Quitar clase activa de todos los botones y pestañas
            buttons.forEach((btn) => btn.classList.remove("active"));
            tabs.forEach((tab) => tab.classList.remove("active"));

            // Añadir clase activa al botón y pestaña seleccionados
            button.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });
});
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