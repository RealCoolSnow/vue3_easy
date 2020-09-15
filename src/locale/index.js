/*
 * @Description:
 * @Author: CoolSnow (coolsnow2020@gmail.com)
 * @Date: 2020-09-14 18:12:22
 * @LastEditors: CoolSnow
 * @LastEditTime: 2020-09-15 14:31:33
 */
import { createI18n } from "vue-i18n";
import Cookies from "js-cookie";
import cnLocale from "./cn";
import enLocale from "./en";

const messages = {
  cn: {
    ...cnLocale
  },
  en: {
    ...enLocale
  }
};

export function getLanguage() {
  const chooseLanguage = Cookies.get("language");
  if (chooseLanguage) {
    return chooseLanguage;
  }

  // if has not choose language
  const language = (
    navigator.language || navigator.browserLanguage
  ).toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return "cn";
}

const i18n = createI18n({
  legacy: true,
  // set locale
  // options: en | zh | es
  locale: getLanguage(),
  // set locale messages
  messages
});

export function checkoutLanguage(lang) {
  Cookies.set("language", lang);
  i18n.locale = lang;
}

checkoutLanguage(getLanguage());

export default i18n;
