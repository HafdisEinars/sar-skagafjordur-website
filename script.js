document.addEventListener("DOMContentLoaded", () => {
  console.log("Search and Rescue - Skagfirðingasveit website loaded");

  const buttons = document.querySelectorAll(".card a, .hero-button");
const visitForm = document.getElementById("visit-form");

if (visitForm) {
  visitForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const group = document.getElementById("group").value;
    const message = document.getElementById("message").value;

    const subject = "Book a visit to the rescue team";
    const body = `
Name: ${name}
Email: ${email}
Preferred date: ${date}
Group size: ${group}

Message:
${message}
    `;

    window.location.href =
      `mailto:you@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const text = button.textContent.trim();
      alert(`${text} page coming soon.`);
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded");

  const visitForm = document.getElementById("visit-form");

  if (visitForm) {
    visitForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const date = document.getElementById("date").value;
      const group = document.getElementById("group").value;
      const message = document.getElementById("message").value;

      const subject = "Book a visit to the rescue team";

      const body =
`Name: ${name}
Email: ${email}
Preferred date: ${date}
Group size: ${group}

Message:
${message}`;

      window.location.href =
        `mailto:skagfirdingasveitskr@gmial.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
});
