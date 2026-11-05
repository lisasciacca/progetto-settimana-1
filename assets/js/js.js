const overlay = document.querySelector('#overlayContatti');
const openModal = document.querySelector('#apriContatti');
const closeModal = document.querySelector('#chiudiContatti');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.removeAttribute('hidden'); 
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.setAttribute('hidden', '');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        e.preventDefault();
        overlay.setAttribute('hidden', '');
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (overlay) {
            overlay.setAttribute('hidden', ''); 
        }
    }
});