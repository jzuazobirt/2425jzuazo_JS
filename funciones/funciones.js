// funciones.js (con EmailJS)

// Inicializar EmailJS con tu ID de usuario
emailjs.init("YOUR_USER_ID");

function volverAlInicio() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
    // Asignar evento a enlaces de "volver al inicio"
    document.querySelectorAll(".volver-inicio").forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            volverAlInicio();
        });
    });

    // Interceptar el envío del formulario para usar EmailJS
    const formulario = document.getElementById("formularioContacto");
    if (formulario) {
        formulario.addEventListener("submit", function (e) {
            e.preventDefault(); // Evitar el envío tradicional

            // Enviar formulario a través de EmailJS
            emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
                .then(() => {
                    alert("Tu mensaje ha sido enviado. Gracias por contactarnos.");
                    formulario.reset();
                }, (error) => {
                    alert("Hubo un error al enviar el mensaje: " + error.text);
                });
        });
    }
});
