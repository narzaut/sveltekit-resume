import { dictionary, locale, _, json } from 'svelte-i18n';
import { derived } from 'svelte/store';
import spanish from '../lang/spanish.json'
import english from '../lang/english.json'

function setupI18n({ withLocale: _locale } = { withLocale:  'en' }) {
  dictionary.set({ en: english, es: spanish });
  locale.set(_locale);
}


const isLocaleLoaded = derived(locale, $locale => typeof $locale === 'string');
export { _, setupI18n, isLocaleLoaded, locale, json };