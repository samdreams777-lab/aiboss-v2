import { createContext, useContext, type ReactNode } from 'react'
import type { Lang } from './lang'
import { dictionary, type Dict } from './dictionary'

interface LangContextValue {
  lang: Lang
  t: Dict
  setLang: (lang: Lang) => void
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({
  lang,
  setLang,
  children,
}: {
  lang: Lang
  setLang: (lang: Lang) => void
  children: ReactNode
}) {
  return (
    <LangContext.Provider value={{ lang, t: dictionary[lang], setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) {
    throw new Error('useLang must be used within LangProvider')
  }
  return ctx
}
