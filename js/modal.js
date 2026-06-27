// Impressum-Elemente
const openImpressum = document.getElementById('impressum-open');
const closeImpressum = document.getElementById('impressum-close');
const impressumModal = document.getElementById('impressum-modal');

// Datenschutz-Elemente
const openDatenschutz = document.getElementById('datenschutz-open');
const closeDatenschutz = document.getElementById('datenschutz-close');
const datenschutzModal = document.getElementById('datenschutz-modal');

// Hilfsfunktion zum Öffnen eines Modals
function openModal(modal) {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

// Hilfsfunktion zum Schließen eines Modals
function closeModal(modal) {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    // Nur Scrollen reaktivieren, wenn BEIDE Modals zu sind
    if (!impressumModal.classList.contains('is-open') && !datenschutzModal.classList.contains('is-open')) {
        document.body.style.overflow = '';
    }
}

// --- Event Listener Impressum ---
openImpressum.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(datenschutzModal); // Falls offen, schließen
    openModal(impressumModal);
});

closeImpressum.addEventListener('click', () => closeModal(impressumModal));

impressumModal.addEventListener('click', (e) => {
    if (e.target === impressumModal) closeModal(impressumModal);
});

// --- Event Listener Datenschutz ---
openDatenschutz.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(impressumModal); // Falls offen, schließen
    openModal(datenschutzModal);
});

closeDatenschutz.addEventListener('click', () => closeModal(datenschutzModal));

datenschutzModal.addEventListener('click', (e) => {
    if (e.target === datenschutzModal) closeModal(datenschutzModal);
});

// --- Globaler Keydown-Listener (Escape) ---
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (impressumModal.classList.contains('is-open')) closeModal(impressumModal);
        if (datenschutzModal.classList.contains('is-open')) closeModal(datenschutzModal);
    }
});