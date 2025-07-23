import i18next from '../node_modules/i18next/dist/esm/i18next.js';
import LanguageDetector from '../node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js';

// Импортируем файлы переводов
import translationEN from '../translations/en/translation.js';
import translationRU from '../translations/ru/translation.js';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18next.use(LanguageDetector).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
