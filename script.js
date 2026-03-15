document.addEventListener("DOMContentLoaded", () => {
  console.log("Search and Rescue - Skagfirðingasveit website loaded");

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

      const body = `Name: ${name}
Email: ${email}
Preferred date: ${date}
Group size: ${group}

Message:
${message}`;

      window.location.href =
        `mailto:skagfirdingasveitskr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
});
