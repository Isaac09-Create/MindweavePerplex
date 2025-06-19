// Drag rotation for the cube
const cube = document.querySelector('.cube');
let isDragging = false;
let previousX, previousY;
let rotationX = 0, rotationY = 0;

cube.addEventListener('mousedown', (e) => {
  isDragging = true;
  previousX = e.clientX;
  previousY = e.clientY;
  cube.style.animationPlayState = 'paused';
  cube.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  cube.style.animationPlayState = 'running';
  cube.style.cursor = 'grab';
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - previousX;
  const deltaY = e.clientY - previousY;
  rotationY += deltaX * 0.5;
  rotationX -= deltaY * 0.5;
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  previousX = e.clientX;
  previousY = e.clientY;
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission (page reload)

    // You can add form validation here if needed

    // Simulate sending message (replace with actual AJAX/fetch if backend exists)
    setTimeout(() => {
      formMsg.style.color = 'green';
      formMsg.textContent = 'Thank you for your message! We will get back to you shortly.';
      form.reset(); // Clear the form fields
    }, 500);

    // Optional: If you want to clear the message after some time
    setTimeout(() => {
      formMsg.textContent = '';
    }, 8000);
  });
});
