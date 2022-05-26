import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ja: {
    translations: {
      sand: "サンドボックスへようこそ！",
      start: "編集を始めよう！"
    }
  },
  en: {
    translations: {
      sand: "Hello CodeSandbox",
      start: "Start editing to see some magic happen!"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en"
});

export default i18n;
