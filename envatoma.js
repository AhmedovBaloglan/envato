const toggleBtn = document.getElementById('toggleBtn');
const hiddenRow = document.querySelector('.gridCard1');

toggleBtn.addEventListener('click', () => {
  hiddenRow.classList.toggle('visible');

  if (hiddenRow.classList.contains('visible')) {
    toggleBtn.textContent = 'Daha Az Göstər';
  } else {
    toggleBtn.textContent = 'Daha Çox Göstər';
  }
});