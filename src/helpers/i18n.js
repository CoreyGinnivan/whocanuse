/**
 * IMPORTS
 **/

import { useRouter } from 'next/router'
import keyedEnGB from '../l10n/keyed/en-GB'
import textEnGB from '../l10n/textTranslations/en-GB/en-GB'

// Import translations
import keyedDeDE from '../l10n/keyed/de-DE'

// Import running texts
import textDeDE from '../l10n/textTranslations/de-DE/de-DE'

/**
 * VARS
 **/

const defaultLanguage = 'en'
const keyedTranslations = new Map([
  [defaultLanguage, keyedEnGB],

  // Adding translations to the set
  // ["<language-identifier>", <translationSet> ]
  ['de', keyedDeDE],
])

const textTranslations = new Map([
  [defaultLanguage, textEnGB],

  // Adding translations to the set
  // ["<language-identifier>", <translationSet> ]
  ['de', textDeDE],
])

/**
 * FUNCS
 **/

/**
 * Returns the language itentifiers of available translation
 * @returns {Array<string>} Array of language itentifiers
 */
function getLocales() {
  return Array.from(keyedTranslations.keys())
}

/**
 * Retrieves the translation for a given translation key.
 * @param {string} key Translation key
 * @param {string=} set Set to which the translation key belongs; defaults to `global`.
 * @returns {string} Translation or translation key if no translation was found.
 */
function translateByKey(key, set = 'global') {
  const lang = useRouter().locale ?? defaultLanguage
  const translations =
    keyedTranslations.get(lang) ?? keyedTranslations.get(lang.substring(0, 2))
  return translations?.get(set)?.get(key) ?? key
}

/**
 * Get a translate function with set and language set.
 * @param {string=} set  set slug to which the translation key belong.
 * @returns {(key: string) => string} Translate function
 */
function getKeyedTranslations(set) {
  return (key) => translateByKey(key, set)
}

/**
 * Retrieves the running text translation for a given key.
 * @param {string} key Translation key
 * @returns {string} Translated text or translation key if no translation was found.
 */
function getTranslatedText(key) {
  const { locale } = useRouter()
  const translations =
    textTranslations.get(locale ?? defaultLanguage) ??
    textTranslations.get(
      locale.substring(0, 2) ?? defaultLanguage.substring(0, 2),
    )
  return translations?.get(key) ?? key
}

/**
 * EXPORTS
 **/

export { getKeyedTranslations, getTranslatedText, getLocales }
