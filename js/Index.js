import { DateTime } from "./luxon.js";

const listButton = document.querySelector('.list-button')
const bookSection = document.querySelector('.book-section');
const formButton = document.querySelector('.form-button')
const formSection = document.querySelector('.form-section');
const contactButton = document.querySelector('.contact-button')
const contactSection = document.querySelector('.contact-section');
const timezone = document.querySelector('.timezone');

let localDatetime = DateTime.local();
//let dt = DateTime.now();
//function time (){
  //  timezone.textContent =`${dt.monthLong} ${dt.month} ${dt.year} \ ${dt.hour}:${dt.minute}:${dt.second}`;
  //  time();
  //}
  timezone.textContent= DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);

listButton.addEventListener('click', function (){
    timezone.textContent= DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
    bookSection.style.display = "block";
    formSection.style.display = "none";
    contactSection.style.display ="none";
})

formButton.addEventListener('click', function (){
    timezone.textContent= DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
    formSection.style.display = "block";
    bookSection.style.display = "none";
    contactSection.style.display ="none";
})

contactButton.addEventListener('click', function (){
    timezone.textContent= DateTime.local().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
    formSection.style.display = "none";
    bookSection.style.display = "none";
    contactSection.style.display ="block";
})

//setTimeout(time,10000)
//time();
