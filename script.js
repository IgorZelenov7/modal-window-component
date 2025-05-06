'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const showModalWindows = document.querySelectorAll('.show-modal-window');

const addHiddenClass = () => {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

const removeHiddenClass = () => {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (const item of showModalWindows) {
  item.addEventListener('click', removeHiddenClass);
  btnCloseModalWindow.addEventListener('click', addHiddenClass);
  overlay.addEventListener('click', addHiddenClass);
};
