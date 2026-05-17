const CONTACT_EMAIL = "skagfirdingasveitskr@gmail.com";

const SUBJECTS_BY_TOPIC = {
  "General contact": "Contact request from sarice.is",
  "Visit request": "Visit request from sarice.is",
  "Story or memory": "Story or memory from sarice.is",
  Collaboration: "Collaboration request from sarice.is"
};

document.addEventListener("DOMContentLoaded", () => {
  const visitForm = document.getElementById("visit-form");
  const topicSelect = document.getElementById("topic");

  if (!visitForm) {
    return;
  }

  if (topicSelect) {
    const params = new URLSearchParams(window.location.search);

    if (params.get("topic") === "story") {
      topicSelect.value = "Story or memory";
    }
  }

  visitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const topic = topicSelect ? topicSelect.value : "General contact";
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const group = document.getElementById("group").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = SUBJECTS_BY_TOPIC[topic] || SUBJECTS_BY_TOPIC["General contact"];
    const body = `Topic: ${topic}
Name: ${name}
Email: ${email}
Preferred date: ${date || "Not provided"}
Group size: ${group || "Not provided"}

Message:
${message || "No message provided."}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
