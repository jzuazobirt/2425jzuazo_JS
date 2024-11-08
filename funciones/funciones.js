// funciones.js

// Función para volver al inicio de la página con animación
function volverAlInicio() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para mostrar alerta al hacer clic en eventos
function mostrarAlertaEvento(nombreEvento) {
    alert(`Has seleccionado el evento: ${nombreEvento}`);
}

// Inicializar eventos después de cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    // Asignar evento a enlaces de "volver al inicio"
    document.querySelectorAll(".volver-inicio").forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            volverAlInicio();
        });
    });

    // Asignar alertas a los eventos destacados
    document.querySelectorAll(".evento-item h3").forEach(evento => {
        evento.addEventListener("click", () => mostrarAlertaEvento(evento.textContent));
    });

    // Enviar alerta personalizada desde el formulario de contacto
    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Tu mensaje ha sido enviado. Gracias por contactarnos.");
            formulario.reset();
        });
    }
});

