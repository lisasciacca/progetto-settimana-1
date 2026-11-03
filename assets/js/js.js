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

