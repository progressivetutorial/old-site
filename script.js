// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Hamburger Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Enquiry Popup Show on Load
window.addEventListener("load", () => {
  const popup = document.getElementById("enquiryPopup");
  if (popup) {
    popup.style.display = "flex";
  }
});

// Close Popup on Click
document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      const popup = document.getElementById("enquiryPopup");
      if (popup) popup.style.display = "none";
    });
  }
});
