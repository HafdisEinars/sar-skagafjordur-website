const CONTACT_EMAIL = "skagfirdingasveitskr@gmail.com";

document.addEventListener("DOMContentLoaded", () => {
  const visitForm = document.getElementById("visit-form");

  if (!visitForm) {
    return;
  }

  visitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const group = document.getElementById("group").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = "Contact request from sarice.is";
    const body = `Name: ${name}
Email: ${email}
Preferred date: ${date || "Not provided"}
Group size: ${group || "Not provided"}

Message:
${message || "No message provided."}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
