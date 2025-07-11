document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const message = document.getElementById("hiddenMessage");
  const formContainer = document.getElementById("formDiv");

  if (form && message && formContainer) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      // Optional: show loading message
      message.style.display = "block";
      message.textContent = "Sending...";
      formContainer.style.display = "none";

      fetch("forms/contact.php", {
        method: "POST",
        body: formData
      })
        .then(response => response.text())
        .then(data => {
          if (data.toLowerCase().includes("success")) {
            message.textContent = "Thank you! Your message has been sent.";
          } else {
            message.textContent = "Oops! Something went wrong: " + data;
            formContainer.style.display = "block"; // allow retry
          }
        })
        .catch(error => {
          message.textContent = "Network error. Please try again.";
          formContainer.style.display = "block";
          console.error("Email error:", error);
        });
    });
  }
});