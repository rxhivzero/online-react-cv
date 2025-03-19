import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en';
import tw from './translations/tw';

// Get language from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const defaultLang = urlParams.get('hl') === 'en' ? 'en' : 'zh-TW';

i18n.use(initReactI18next).init({
    fallbackLng: defaultLang,
    debug: true,
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
            translation: en,
        },
        'zh-TW': {
            translation: tw,
        },
    },
});

export default i18n;
