// Example: Heart animation
const card = document.querySelector('.card');

card.addEventListener('click', () => {
  card.style.transform = 'scale(1.1)';
  setTimeout(() => card.style.transform = 'scale(1)', 300);
});