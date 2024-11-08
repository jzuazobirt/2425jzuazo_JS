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
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formularioContacto");

    if (formulario) {
        formulario.addEventListener("submit", function (e) {
            e.preventDefault(); // Evita el envío tradicional del formulario

            // Obtener los valores del formulario
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("mensaje").value;

            // Codificar el asunto y el cuerpo para el enlace mailto
            const subject = "Contacto desde el formulario";
            const body = `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`;

            // Construir el enlace mailto con los datos codificados
            const mailtoLink = `mailto:jzuazo@birt.eus?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Crear un elemento temporal para abrir el enlace mailto
            const tempLink = document.createElement("a");
            tempLink.href = mailtoLink;
            tempLink.style.display = "none"; // Ocultar el enlace en la interfaz
            document.body.appendChild(tempLink);
            tempLink.click(); // Ejecutar el enlace mailto
            document.body.removeChild(tempLink); // Limpiar el enlace temporal

            // Opcionalmente, puedes reiniciar el formulario
            formulario.reset();
        });
    }
});
