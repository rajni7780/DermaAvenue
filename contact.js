document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent real form submission

    // Basic Validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Email Format Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate success
    form.reset(); // Clear the form
    successMessage.style.display = 'block';

    // Hide message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
  });
});
