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
            e.preventDefault(); // Evita el envío tradicional del formulario

            // Obtener los valores del formulario
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("mensaje").value;

            // Construir el asunto con el nombre del remitente
            const subject = `Nuevo mensaje de ${nombre}`;

            // Enviar los datos a través de EmailJS
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                from_name: nombre,
                from_email: email,
                message: mensaje,
                subject: subject // Añadir el asunto personalizado
            }).then(
                function(response) {
                    console.log("Correo enviado con éxito", response.status, response.text);
                    alert("¡Mensaje enviado con éxito!");
                },
                function(error) {
                    console.log("Error al enviar el correo", error);
                    alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.");
                }
            );

            // Reiniciar el formulario después del envío
            formulario.reset();
        });
    }
});
