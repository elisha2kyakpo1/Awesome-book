// eslint-disable-next-line import/extensions
import { DateTime } from './luxon.js';

const listButton = document.querySelector('.list-button');
const bookSection = document.querySelector('.book-section');
const formButton = document.querySelector('.form-button');
const formSection = document.querySelector('.form-section');
const contactButton = document.querySelector('.contact-button');
const contactSection = document.querySelector('.contact-section');
const timezone = document.querySelector('.timezone');

timezone.textContent = DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);

listButton.addEventListener('click', () => {
  timezone.textContent = DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  bookSection.style.display = 'block';
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
});

formButton.addEventListener('click', () => {
  timezone.textContent = DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  formSection.style.display = 'block';
  bookSection.style.display = 'none';
  contactSection.style.display = 'none';
});

contactButton.addEventListener('click', () => {
  timezone.textContent = DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  formSection.style.display = 'none';
  bookSection.style.display = 'none';
  contactSection.style.display = 'block';
});
