

import { createI18n, Messages } from "vue3-i18n";

import en from '../lang/en.json'

const messages: Messages = {
  en: {
    ...en,
  }
};


const i18n = createI18n({
  locale: "en",
  messages: messages,
});

export default i18n 
