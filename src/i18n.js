import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en';
import tw from './translations/tw';

// Get language from URL parameter or browser preference
const urlParams = new URLSearchParams(window.location.search);
const browserLang = navigator.language;
const defaultLang = urlParams.get('hl') || (browserLang.startsWith('zh') ? 'zh-TW' : 'en');

const i18nConfig = {
    fallbackLng: 'en',
    lng: defaultLang,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: { translation: en },
        'zh-TW': { translation: tw },
    },
    react: {
        useSuspense: true,
    },
};

i18n.use(initReactI18next).init(i18nConfig);

export default i18n;
