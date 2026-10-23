document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const form = document.getElementById("recruitmentForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const button = form.querySelector("button[type='submit']");
      const originalText = button.textContent;

      button.textContent = "Søknad sendt";
      button.disabled = true;
      button.style.opacity = "0.8";

      const successMessage = document.createElement("p");
      successMessage.textContent = "Takk! Din søknad er registrert, og vi kommer tilbake til deg snart.";
      successMessage.style.marginTop = "1rem";
      successMessage.style.color = "#64f5a2";
      successMessage.style.fontWeight = "600";

      const existingMessage = form.querySelector(".form-success");
      if (existingMessage) existingMessage.remove();

      successMessage.classList.add("form-success");
      form.appendChild(successMessage);

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.style.opacity = "1";
        form.reset();
      }, 2000);
    });
  }
});
