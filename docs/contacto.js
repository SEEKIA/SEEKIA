document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("c_harles199@hotmail.com"); // Sustituye con tu User ID de EmailJS

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value,
        };

        emailjs
            .send("TU_SERVICE_ID", "TU_TEMPLATE_ID", formData)
            .then(() => {
                alert("¡Mensaje enviado con éxito!");
                form.reset(); // Reiniciar formulario
            })
            .catch((error) => {
                alert("Hubo un error al enviar el mensaje: " + error.text);
            });
    });
});
