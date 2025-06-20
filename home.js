const carousel = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-img');
let currentIndex = 0;

function updateCarousel() {
  images.forEach((img, index) => {
    img.classList.remove('active');
    if (index === currentIndex) {
      img.classList.add('active');
    }
  });
}

document.querySelector('.carousel-btn.left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

document.querySelector('.carousel-btn.right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

updateCarousel();
