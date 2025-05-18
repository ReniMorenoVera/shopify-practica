document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('PopupModal');
  const closeButton = popup.querySelector('.popup-modal__close');
  const noThanksButton = popup.querySelector('.popup-modal__no-thanks');

  popup.style.display = 'flex';

  function hidePopup() {
    popup.style.opacity = '0';
    setTimeout(function () {
      popup.style.display = 'none';
    }, 300);
  }

  closeButton.addEventListener('click', hidePopup);

  noThanksButton.addEventListener('click', hidePopup);

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      hidePopup();
    }
  });
});
