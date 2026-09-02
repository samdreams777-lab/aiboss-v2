/**
 * Language types for AI B.O.S.S. V2
 */
export type Lang = 'en' | 'vi'

export const LANGS: Lang[] = ['en', 'vi']

export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
}

export const DEFAULT_LANG: Lang = 'vi'

export const LANG_COOKIE = 'aiboss_lang'
