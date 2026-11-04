const overlay = document.querySelector('.overlay');
const openModal = document.querySelector('#apriContatti');
const closeModal = document.querySelector('#chiudiContatti');

openModal.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.style.display = 'block';
});

closeModal.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.style.display = 'none';
});

overlay.addEventListener('click', (e) => {
	if (e.target === overlay) {
        e.preventDefault();
        overlay.style.display = 'none';
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (overlay) {
            overlay.style.display = 'none'; 
        }
    }
});