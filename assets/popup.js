window.onload = function () {
  setTimeout(() => {
    const popup = document.getElementById('newsletter-popup');
    if (popup) {
      popup.classList.remove('hidden');
    } else {
      console.error('Elemento #newsletter-popup no encontrado');
    }
  }, 1000);
};

function closePopup() {
  const popup = document.getElementById('newsletter-popup');
  popup.classList.add('hidden');
}

function showPopup() {
  const popup = document.getElementById('newsletter-popup');
  popup.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    showPopup();
  }, 1000);
});
