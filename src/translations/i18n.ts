import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LANGUAGE, LANGUAGE_KEY } from 'Constants/translations';

export const getInitialLanguage = () => localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;

const loadTranslationJson = async (language: string) => {
    if (!i18n.hasResourceBundle(language, 'translations') && language.toUpperCase() !== DEFAULT_LANGUAGE) {
        const response = await import(`./translation-jsons/${language.toLowerCase()}.json`);
        i18n.addResourceBundle(language, 'translations', response.default);
        document.documentElement.lang = language;
    }
};

export const initializeTranslation = async () => {
    await loadTranslationJson(getInitialLanguage());
};

export const changeLanguage = async (language: string) => {
    await loadTranslationJson(language);
    await i18n.changeLanguage(language, () => {
        localStorage.setItem(LANGUAGE_KEY, language);
    });
};

i18n.use(initReactI18next).init({
    lng: getInitialLanguage(),
    fallbackLng: DEFAULT_LANGUAGE,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});
