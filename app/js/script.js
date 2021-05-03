function init() {
 const imageSelect = document.querySelector('.slides__image--select');
 const slides = document.querySelectorAll('.slides__tab');
 const slidesContent = document.querySelectorAll('.slides__content');
 const slidesImages = document.querySelectorAll('.slides__image');

 function setSlides(e) {
  const clicked = e.target.closest('.slides__tab');

  if (!clicked) return;

  // Tabs
  slides.forEach((slide) => slide.classList.remove('slides__tab--active'));
  clicked.classList.add('slides__tab--active');

  // Content
  slidesContent.forEach((slide) =>
   slide.classList.remove('slides__content--active')
  );

  slidesContent.forEach((slide) =>
   slide.classList.remove('slides__content--active')
  );
  document
   .querySelector(`.slides__content--${clicked.dataset.tab}`)
   .classList.add('slides__content--active');

  // Images
  slidesImages.forEach((image) =>
   image.classList.remove('slides__image--active')
  );

  document
   .querySelector(`.slides__image--${clicked.dataset.tab}`)
   .classList.add('slides__image--active');
 }

 imageSelect.addEventListener('click', (e) => {
  setSlides(e);
 });
}
init();
