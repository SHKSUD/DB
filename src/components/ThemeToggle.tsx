'use client'
import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { Moon, Sun } from './Icons'

export default function ThemeToggle() {
  const { dark, toggle, t } = useTheme()
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={toggle}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        display: 'flex', alignItems: 'center', gap: 7,
        padding: '7px 14px',
        background: hov ? (dark ? 'rgba(245,158,11,0.15)' : 'rgba(245,158,11,0.12)') : (dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'),
        border: `1px solid ${t.BORDER}`,
        borderRadius: 20, cursor: 'pointer', transition: 'all .22s',
      }}
    >
      <span style={{ transition: 'transform .4s', transform: dark ? 'rotate(0deg)' : 'rotate(180deg)', display: 'flex' }}>
        {dark ? <Moon s={14} c={t.A} /> : <Sun s={14} c={t.A} />}
      </span>
      <span style={{ ...t.mono, fontSize: 9, color: t.A, letterSpacing: '0.12em' }}>
        {dark ? 'LIGHT' : 'DARK'}
      </span>
    </button>
  )
}
