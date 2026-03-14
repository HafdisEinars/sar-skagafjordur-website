document.addEventListener("DOMContentLoaded", () => {
  console.log("Search and Rescue - Skagfirðingasveit website loaded");

  const buttons = document.querySelectorAll(".card a, .hero-button");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const text = button.textContent.trim();
      alert(`${text} page coming soon.`);
    });
  });
});
