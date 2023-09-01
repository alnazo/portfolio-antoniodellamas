var btn = document.getElementById('gotop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Contact-Card */
/* Inspire from 3D Ticket Midudev from ViteConf */

const $ = selector => document.querySelector(selector);

const wrapper = $('.wrapper');
const card = $('.contact-card');

const { width, height } = wrapper.getBoundingClientRect();

const halfWidth = width / 2;
const halfHeight = height / 2;

wrapper.addEventListener('mousemove', event => {
  const { offsetX, offsetY } = event;

  const rotationX = ((offsetX - halfWidth) / halfWidth) * 5;
  const rotationY = ((offsetY - halfHeight) / halfHeight) * 5;

  card.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});

wrapper.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
})