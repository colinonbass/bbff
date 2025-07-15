document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("thankYouMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("forms/process-form.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      form.style.display = "none";
      messageBox.style.display = "block";
      messageBox.textContent = data;
    })
    .catch(() => {
      messageBox.style.display = "block";
      messageBox.style.color = "red";
      messageBox.textContent = "Sorry, there was an error sending your message.";
    });
  });
});