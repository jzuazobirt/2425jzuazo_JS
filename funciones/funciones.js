// Función para crear e insertar el menú en el header, el menu con el que navegaremos entre páginas
function createMenu() {
    // Selecciona el elemento header con id "top"
    const header = document.getElementById('top');

    // Verifica si el menú ya ha sido creado
    if (header.querySelector('nav')) {
        return; // Si el nav ya existe, no hace nada para evitar duplicados
    }

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

// Función para crear e insertar el pie de página con botones de redes sociales
function createFooter() {
    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
        return; // Si el footer ya existe, no hace nada para evitar duplicados
    }

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
}

// Función para ajustar el tamaño de las fotos utilizado principalmente como ejemplo en "historia"
function ajustarTamanoFotos() {
    // Selecciona todas las imágenes con la clase "foto-ajustable"
    const fotos = document.querySelectorAll('.foto-ajustable');

    // Define el tamaño deseado para las fotos
    const anchoDeseado = '500px';
    const altoDeseado = 'auto';

    // Aplica el estilo a cada imagen
    fotos.forEach(foto => {
        foto.style.width = anchoDeseado;
        foto.style.height = altoDeseado;
    });
}

// Función para hacer que el título H1 parpadee, utilizado como ejemplo en eventos
function iniciarParpadeoTitulo() {
    const titulo = document.getElementById('titulo-eventos');

    // Verifica si el elemento existe
    if (!titulo) return;

    // Aplica una transición CSS para un efecto suave
    titulo.style.transition = 'opacity 0.5s ease-in-out';
    let opacidadAlta = true;

    // Configura el intervalo para alternar la opacidad
    setInterval(() => {
        // Alterna la opacidad entre 1 y 0.5 para un efecto de parpadeo suave
        titulo.style.opacity = opacidadAlta ? '1' : '0.5';
        opacidadAlta = !opacidadAlta;
    }, 500); // Cambia cada 500 ms (0.5 segundos)
}


  


// Ejecutar las funciones cuando el contenido esté cargado
document.addEventListener('DOMContentLoaded', () => {
    createMenu();
    createFooter();
    iniciarParpadeoTitulo();
});
