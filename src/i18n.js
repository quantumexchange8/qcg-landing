import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import enTranslation from "./locales/en/translation.json";
import zhTranslation from "./locales/zh/translation.json";

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      zh: { translation: zhTranslation },
    },
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"], // Ensure the language is cached in localStorage
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    onInitialized: (options) => {
      console.log("Detected language:", options.lng);
    },
  });

export default i18n;