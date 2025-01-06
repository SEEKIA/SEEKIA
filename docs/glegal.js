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
