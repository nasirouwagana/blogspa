import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import en from 'vee-validate/dist/locale/en'
import fr from 'vee-validate/dist/locale/fr'

const locale = process.env.VUE_APP_LOCALE === 'en' ? en : fr

Validator.localize(locale.toString(), locale)

Vue.use(VeeValidate, {
  locale
})
