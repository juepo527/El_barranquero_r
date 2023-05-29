const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let intervalId;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');

  // Reiniciar el contador
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 5000);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

intervalId = setInterval(nextSlide, 5000);

showSlide(currentSlide);
