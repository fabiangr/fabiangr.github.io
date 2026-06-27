// HTML-Elemente auslesen
const navbar = document.querySelector('.navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-links a');

// Funktion zum Umschalten des Navbar-Hintergrunds (Transparent vs. Opak)
function checkScroll() {
    // Wenn mehr als 20 Pixel gescrollt wurde ODER das mobile Menü offen ist, wird die Navbar opak
    if (window.scrollY > 20 || navMenu.classList.contains('active')) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Event Listener für den Hamburger-Button (Mobilgeräte)
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    checkScroll(); // Zustand direkt prüfen, damit geöffnete Mobil-Menüs nie transparent im Hintergrund sind
});

// Schließt das Menü automatisch, wenn ein Link angeklickt wird
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        // Nach dem Klick gleitet die Seite zum Anker – die Navbar soll sofort opak werden
        navbar.classList.add('scrolled');
    });
});

// Überwacht das Scrollen des Nutzers auf der Seite
window.addEventListener('scroll', checkScroll);

// Einmal beim Laden ausführen, falls der User die Seite mitten drin neu lädt
checkScroll();
