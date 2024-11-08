// funciones.js

// Función para crear e insertar el menú en el header
function createMenu() {
    console.log("Ejecutando createMenu");  // Mensaje de diagnóstico

    // Selecciona el elemento header con id "top"
    const header = document.getElementById('top');

    // Verifica si el header existe
    if (header) {
        console.log("Header encontrado");  // Mensaje de diagnóstico

        const nav = document.createElement('nav');
        const ul = document.createElement('ul');

        // Lista de elementos del menú
        const menuItems = [
            { text: 'Inicio', href: 'index.html' },
            { text: 'Historia', href: 'historia.html' },
            { text: 'Eventos', href: 'eventos.html' },
            { text: 'Recetas', href: 'recetas.html' },
            { text: 'Contacto', href: 'contacto.html' }
        ];

        // Crear los elementos de la lista
        menuItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            li.appendChild(a);
            ul.appendChild(li);
        });

        // Añadir la lista al nav y luego el nav al header
        nav.appendChild(ul);
        header.appendChild(nav);
        console.log("Menú insertado en el header");  // Mensaje de diagnóstico
    } else {
        console.log("Header con id 'top' no encontrado");  // Mensaje de error
    }
}

// Ejecuta la función para crear el menú cuando el contenido esté cargado
document.addEventListener('DOMContentLoaded', createMenu);
