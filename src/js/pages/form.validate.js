import { validateForm, validateField } from '../utils.js';

const callbackForm = document.querySelector('.callback__form');
const callbackFields = document.querySelectorAll('.callback__input');

callbackFields.forEach((item) => {
  item.addEventListener('input', () => {
    validateField(item);
  });
});

callbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm(callbackFields);
});
