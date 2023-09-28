// locales/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from '../data/enTranslation.json'
import viTranslation from '../data/viTranslation.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation
    },
    vi: {
      translation: viTranslation
    }
    // Thêm các ngôn ngữ khác ở đây
  },
  lng: 'vi', // Ngôn ngữ mặc định
  interpolation: {
    escapeValue: false
  }
})

export default i18n
