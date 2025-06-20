/* home.js */

let currentIndex = 0;
const track = document.getElementById('carouselTrack');
const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateCarousel() {
  const imageWidth = images[0].clientWidth + 20; // 20 for margin
  const offset = currentIndex * imageWidth;
  track.style.transform = `translateX(-${offset}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Scroll to top
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.innerHTML = '↑';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
