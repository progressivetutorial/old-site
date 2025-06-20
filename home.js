let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-img');

function updateCarousel() {
  slides.forEach((img, i) => {
    img.classList.remove('active');
    if (i === currentSlide) img.classList.add('active');
  });
}

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  updateCarousel();
}
