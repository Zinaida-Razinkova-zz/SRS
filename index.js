// Mobile menu
(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
  
    menuBtnRef.addEventListener('click', () => {
      const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
  
      menuBtnRef.classList.toggle('is-open');
      menuBtnRef.setAttribute('aria-expanded', !expanded);
  
      mobileMenuRef.classList.toggle('is-open');
    });
  })();

  // modal
const openModalBtn = document.querySelector('[data-action="modal-open"]');
const closeModalBtn = document.querySelector('[data-action="modal-close"]');
const backdropRef = document.querySelector('.backdrop');

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
backdropRef.addEventListener('click', backdropClick);

function openModal() {
  window.addEventListener('keydown', pressEscape);
  document.body.classList.add('show-modal');
}
function closeModal() {
  window.removeEventListener('keydown', pressEscape);
  document.body.classList.remove('show-modal');
}
function backdropClick(event) {
  // console.log(event.target);
  // console.log(event.currentTarget);
  if (event.target === event.currentTarget) {
    closeModal();
  }
}
function pressEscape(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

// слайдер
function slidesPlugin(activeSlide) {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}
slidesPlugin(2);
// тут передаём индекс активного слайда (activeSlide) в  функции slidesPlugin; при открытии этот слайд будет активным.
