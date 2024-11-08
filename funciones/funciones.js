// funciones.js (con mailto)

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

    // Interceptar el envío del formulario para usar mailto
    const formulario = document.getElementById("formularioContacto");

    if (formulario) {
        formulario.addEventListener("submit", function (e) {
            e.preventDefault(); // Evita el envío tradicional del formulario

            // Obtener los valores del formulario
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("mensaje").value;

            // Construir el asunto y el cuerpo para el enlace mailto
            const subject = encodeURIComponent(`Nuevo mensaje de ${nombre}`);
            const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`);

            // Construir el enlace mailto con los datos codificados
            const mailtoLink = `mailto:jzuazo@birt.eus?subject=${subject}&body=${body}`;

            // Abrir el enlace mailto con un pequeño retraso
            setTimeout(() => {
                window.location.href = mailtoLink;
            }, 100); // Ajusta el tiempo si es necesario

            // Opcionalmente, reiniciar el formulario
            formulario.reset();
        });
    }
});
