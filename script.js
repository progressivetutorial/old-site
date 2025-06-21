document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("enquiryPopup");
  const closeBtn = document.querySelector(".close-btn");

  // Show popup on load (can add timeout if needed)
  popup.style.display = "flex";

  // Close popup
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Form submission (prevent redirect)
  const form = document.getElementById("enquiryForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default submit

    const formData = new FormData(form);
    const response = await fetch("https://formspree.io/f/meoklrww", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.innerHTML = `<p style="text-align:center; font-weight:500;">Thank you! Your enquiry has been submitted.</p>`;
    } else {
      form.innerHTML = `<p style="text-align:center; color:red;">Something went wrong. Please try again later.</p>`;
    }
  });
});
