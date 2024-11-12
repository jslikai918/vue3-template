import { createI18n } from 'vue-i18n';

import zh from './zh';
import en from './en';
import id from './id';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { zh, en, id }
});

export default i18n;
