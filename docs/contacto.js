document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {
        // Validación personalizada antes del envío
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert("Por favor, completa todos los campos obligatorios.");
            return false;
        }

        // Validar formato de correo
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            e.preventDefault();
            alert("Por favor, ingresa un correo electrónico válido.");
            return false;
        }

        // Si todo está bien, el formulario se envía
        alert("Enviando el mensaje...");
    });
});
