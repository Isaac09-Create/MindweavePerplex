// Contact form (demo: shows message, does not send email)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('formMsg').textContent = "Thank you! We'll be in touch soon.";
      form.reset();
    });
  }
});
