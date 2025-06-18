// home.js

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll('.box');

  boxes.forEach((box, index) => {
    box.style.opacity = 0;
    box.style.transform = 'translateY(20px)';

    setTimeout(() => {
      box.style.transition = 'all 0.6s ease-out';
      box.style.opacity = 1;
      box.style.transform = 'translateY(0)';
    }, 100 * index);
  });

  const imgs = document.querySelectorAll(".gallery img");
  imgs.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    });
  });
});
