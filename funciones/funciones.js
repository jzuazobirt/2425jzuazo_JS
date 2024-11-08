// menu.js

// Función para crear e insertar el menú en el header
function createMenu() {
    // Selecciona el elemento header con id "top"
    const header = document.getElementById('top');

    // Crea los elementos nav y ul
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
        const li = document.createElement('li'); // Crea el elemento li
        const a = document.createElement('a');   // Crea el enlace a
        a.href = item.href;                      // Asigna el href del enlace
        a.textContent = item.text;               // Asigna el texto del enlace
        li.appendChild(a);                       // Añade el enlace al li
        ul.appendChild(li);                      // Añade el li a la lista ul
    });

    // Añadir la lista al nav y luego el nav al header
    nav.appendChild(ul);
    header.appendChild(nav);
}

// Ejecuta la función para crear el menú cuando el contenido esté cargado
document.addEventListener('DOMContentLoaded', createMenu);

