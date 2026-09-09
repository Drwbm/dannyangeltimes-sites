const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('projectForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  if (!name || !phone || !message) {
    status.textContent = 'Please complete all required fields.';
    return;
  }

  const subject = encodeURIComponent(`Website Project Request - ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nWebsite Type: ${service}\n\nProject Details:\n${message}`
  );
  window.location.href = `mailto:drldanny@gmail.com?subject=${subject}&body=${body}`;
  status.textContent = 'Opening your email app with the project request...';
});
