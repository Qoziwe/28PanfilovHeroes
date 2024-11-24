// Плавный скролл при нажатии кнопок
document.querySelectorAll('.CL-Card button').forEach((button) => {
  button.addEventListener('click', () => {
    alert('Вы выбрали событие: ' + button.parentElement.textContent.trim());
  });
});
