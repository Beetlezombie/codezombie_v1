// select DOM items

const menuBtn = document.querySelector('.menu-btn'); // selecteert wat in () staat. Dit geval de class btn-menu
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-item');

// set initial state of menu
// overlay open of toe?

let showMenu = false; // let want moet reassignd kunnen worden

// eventlistner nodig om kliks op menu

menuBtn.addEventListener('click', toggleMenu); // op event click gebruik de functie toggleMenu

function toggleMenu() {
    if (!showMenu) { // if NOT showMenu
        menuBtn.classList.add('close'); // classlist.add is vanilla JS
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item => item.classList.add('show')); // soort van array, om doorheen alle navItem te gaan en elk een show te geven

        // set menu state to open
        showMenu = true;

    } else {
        menuBtn.classList.remove('close'); // classlist.add is vanilla JS
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show')); // soort van array, om doorheen alle navItem te gaan en elk een show te geven

        // set menu state to open
        showMenu = false;
    }
}


