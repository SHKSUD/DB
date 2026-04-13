'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import { themeVars, Theme } from '@/lib/theme'

type ThemeCtxType = { dark: boolean; toggle: () => void; t: Theme }
const ThemeCtx = createContext<ThemeCtxType | null>(null)
export const useTheme = () => useContext(ThemeCtx)!

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(true)
  const toggle = () => setDark(d => !d)
  const t = themeVars(dark)
  return <ThemeCtx.Provider value={{ dark, toggle, t }}>{children}</ThemeCtx.Provider>
}
