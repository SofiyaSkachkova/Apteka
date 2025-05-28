const bt2 = document.querySelector('.bt2');
const icon = document.getElementById('icon');

bt2.onclick = () => {
  document.body.classList.toggle('dark-mode');
  icon.src = document.body.classList.contains('dark-mode') ? 'Луна.webp' : 'Солнце.webp';

  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
};

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  icon.src = 'Луна.webp';
}

document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  const targets = document.querySelectorAll('[data-tooltip]');

  targets.forEach(target => {
    target.addEventListener('mouseenter', e => {
      tooltip.textContent = target.getAttribute('data-tooltip');
      tooltip.style.opacity = '1';
    });

    target.addEventListener('mouseleave', e => {
      tooltip.style.opacity = '0';
    });

    target.addEventListener('mousemove', e => {
      tooltip.style.top = (e.clientY + 15) + 'px';
      tooltip.style.left = (e.clientX + 15) + 'px';
    });
  });
});