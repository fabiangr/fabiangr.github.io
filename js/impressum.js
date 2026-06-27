
// Impressum-Elemente auslesen
const openImpressum = document.getElementById('impressum-open');
const closeImpressum = document.getElementById('impressum-close');
const impressumModal = document.getElementById('impressum-modal');

// Overlay öffnen
openImpressum.addEventListener('click', (e) => {
    e.preventDefault(); // Verhindert das Springen der URL (#impressum)
    impressumModal.classList.add('is-open');
    impressumModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Verhindert das Scrollen im Hintergrund
});

// Overlay schließen via Button
closeImpressum.addEventListener('click', () => {
    impressumModal.classList.remove('is-open');
    impressumModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Aktiviert das Hintergrund-Scrollen wieder
});

// Overlay schließen via Klick auf den abgedunkelten Hintergrund
impressumModal.addEventListener('click', (e) => {
    if (e.target === impressumModal) {
        closeImpressum.click();
    }
});

// Overlay schließen via Escape-Taste
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && impressumModal.classList.contains('is-open')) {
        closeImpressum.click();
    }
});