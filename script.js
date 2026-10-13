
//INICIO

// Menu desplegable

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu');
    const navLinks = document.querySelector('.header ul');
    console.log(navLinks)
    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('visible');
        });
    }
});

// Categoria Productos

document.addEventListener("DOMContentLoaded", () => {

    const productos = document.querySelectorAll('.colum .borde');

    productos.forEach(producto => {

        producto.setAttribute('tabindex', '0');

        producto.addEventListener('mouseenter', () => {
            activarEfecto(producto);
        });

        producto.addEventListener('focus', () => {
            activarEfecto(producto);
        });

        producto.addEventListener('mouseleave', () => {
            desactivarEfecto(producto);
        });

        producto.addEventListener('blur', () => {
            desactivarEfecto(producto);
        });
    });
});

function activarEfecto(elemento) {
    elemento.classList.add('borde-activo');
}

function desactivarEfecto(elemento) {
    elemento.classList.remove('borde-activo');
}


// Contacto

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".form");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        
        alert("¡Genial! Tu mensaje ha sido enviado con éxito.");
        formulario.reset();
    });
});