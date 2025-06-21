document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popupOverlay");
  const closeBtn = document.getElementById("popupClose");
  const enquiryForm = document.getElementById("enquiryForm");

  // Show the popup after a short delay
  setTimeout(() => {
    popup.style.display = "flex";
    document.body.classList.add("lock-scroll");
  }, 500);

  // Close popup on X click
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    document.body.classList.remove("lock-scroll");
  });

  // Handle form submission
  enquiryForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    const formData = new FormData(enquiryForm);
    fetch("https://formspree.io/f/meoklrww", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => {
        if (response.ok) {
          // Fade out the popup
          popup.style.transition = "opacity 0.5s ease";
          popup.style.opacity = 0;

          setTimeout(() => {
            popup.style.display = "none";
            popup.style.opacity = 1;
            document.body.classList.remove("lock-scroll");
            enquiryForm.reset();
            alert("Thank you! We'll get back to you soon.");
          }, 500);
        } else {
          alert("Oops! Something went wrong.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Failed to send. Please try again.");
      });
  });
});
