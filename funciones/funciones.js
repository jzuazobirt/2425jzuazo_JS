// funciones.js

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

// Función para crear e insertar el pie de página con botones de redes sociales
function createFooter() {
    console.log("Ejecutando createFooter");  // Mensaje de diagnóstico

    const footer = document.createElement('footer');

    // Texto de derechos reservados
    const footerText = document.createElement('p');
    footerText.textContent = "© 2024 Sociedad Gastronómica y Cultural de Bilbao. Todos los derechos reservados.";
    footer.appendChild(footerText);

    // Contenedor para los botones de redes sociales
    const socialContainer = document.createElement('div');
    socialContainer.classList.add('social-buttons');

    // Botón de Instagram
    const instagramButton = document.createElement('button');
    instagramButton.textContent = 'Instagram';
    instagramButton.onclick = () => {
        window.location.href = 'https://www.instagram.com/panterolo/';
    };
    socialContainer.appendChild(instagramButton);

    // Botón de Facebook
    const facebookButton = document.createElement('button');
    facebookButton.textContent = 'Facebook';
    facebookButton.onclick = () => {
        window.location.href = 'https://www.facebook.com/jesus.zuazo.12';
    };
    socialContainer.appendChild(facebookButton);

    // Agregar el contenedor de botones al footer
    footer.appendChild(socialContainer);

    // Insertar el footer al final del body
    document.body.appendChild(footer);
    console.log("Pie de página insertado con botones de redes sociales");  // Mensaje de diagnóstico
}

// Ejecutar las funciones cuando el contenido esté cargado
document.addEventListener('DOMContentLoaded', () => {
    createMenu();
    createFooter();
});
