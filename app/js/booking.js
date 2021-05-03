function init() {
 const formSubmit = document.querySelector('.form__submit');
 const counterMinus = document.querySelector('.form__counter--icon-minus');
 const counterPlus = document.querySelector('.form__counter--icon-plus');
 const counterText = document.querySelector('.form__counter--text');
 //
 const selectBtn = document.getElementById('select__btn');
 const selectItems = document.querySelectorAll('.form__select--option-item');
 const targetLabel = document.getElementById('select-label');

 const userName = document.getElementById('name');
 const selectLabel = document.querySelectorAll('.form__select--input-label');
 const radioBtn1 = document.getElementById('am');
 //
 const email = document.getElementById('email');
 const month = document.getElementById('month');
 const day = document.getElementById('day');
 const year = document.getElementById('year');
 const hour = document.getElementById('hour');
 const minutes = document.getElementById('minutes');
 const counter = document.getElementById('counter');
 const am = document.getElementById('am');
 const pm = document.getElementById('pm');
 const inputArr = [
  userName,
  email,
  month,
  day,
  year,
  hour,
  minutes,
  am,
  pm,
  counter,
 ];

 function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  const small = formControl.querySelector('small');
  small.innerText = message;
 }

 function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
 }

 function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (input.value.trim() === '') {
   checkRequired(inputArr);
  } else if (re.test(input.value.trim())) {
   showSuccess(input);
  } else {
   showError(input, 'Please enter a valid email');
  }
 }

 function checkRequired(inputArr) {
  inputArr.forEach((input) => {
   if (input.value.trim() === '') {
    showError(input, 'This field is required');
   } else {
    showSuccess(input);
   }
  });
 }

 function peopleCountPlus() {
  counter.value++;
  if (counter.value >= 20) {
   counter.value = 20;
  }
  if (counter.value > 1) {
   counterText.textContent = 'people';
  }
 }

 function peopleCountMinus() {
  counter.value--;
  if (counter.value <= 1) {
   counter.value = 1;
   counterText.textContent = 'person';
  }
 }

 function toggleActive() {
  document
   .querySelector('.form__select--options')
   .classList.toggle('select-options-active');
  document
   .querySelector('.form__select--arrow')
   .classList.toggle('select-arrow-active');
 }

 function setSelectText(e) {
  const labelEl = document.querySelector(`label[for="${e.target.id}"]`)
   .innerText;
  targetLabel.innerText = labelEl;
 }

 radioBtn1.checked = true;

 // Events
 selectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleActive();
 });

 selectItems.forEach((el) =>
  el.addEventListener('click', (e) => {
   setSelectText(e);
   toggleActive();
  })
 );

 counterPlus.addEventListener('click', (e) => {
  e.preventDefault();
  peopleCountPlus();
 });

 counterMinus.addEventListener('click', (e) => {
  e.preventDefault();
  peopleCountMinus();
 });

 formSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  checkRequired(inputArr);
  checkEmail(email);
 });
}
init();
