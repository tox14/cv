import i18next from './i18n.js';

// Функция для обновления всех переведенных элементов на странице
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    element.textContent = i18next.t(key);
  });
}

// Функция для обновления активного состояния кнопок
function updateButtonStates() {
  document.querySelectorAll('.language-btn').forEach((btn) => {
    if (btn.dataset.lang === i18next.language) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Обновляем контент при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  updateContent();
  updateButtonStates();

  // Добавляем обработчики для кнопок переключения языка
  document.querySelectorAll('.language-btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const newLang = event.target.dataset.lang;
      i18next.changeLanguage(newLang).then(() => {
        updateContent();
        updateButtonStates();
      });
    });
  });
});
