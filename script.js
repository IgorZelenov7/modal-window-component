'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const showModalWindows = document.querySelectorAll('.show-modal-window');

const closeModalWindow = () => {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showModalWindow = () => {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (const item of showModalWindows) {
  item.addEventListener('click', showModalWindow);
  btnCloseModalWindow.addEventListener('click', closeModalWindow);
  overlay.addEventListener('click', closeModalWindow);
};
