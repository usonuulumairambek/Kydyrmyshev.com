import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "eng",
    whiteList: ["kg", "ru", "eng"],
    debug: false,
    detection: {
      order: ["LocalStorage", "cookie"],
      caches: ["LocalStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
