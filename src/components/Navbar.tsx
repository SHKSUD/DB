'use client'
import Link from 'next/link'
import { Activity } from './Icons'
import ThemeToggle from './ThemeToggle'
import { useTheme } from './ThemeProvider'

export default function Navbar() {
  const { t } = useTheme()
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 5%', height: 64,
      borderBottom: `1px solid ${t.BORDER}`,
      background: t.NAVBG, backdropFilter: 'blur(20px)',
      transition: 'background .45s, border-color .3s',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
        <div style={{ width: 34, height: 34, border: `1.5px solid ${t.A}`, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Activity s={14} c={t.A} />
        </div>
        <div>
          <div style={{ ...t.mono, fontSize: 11, color: t.A, letterSpacing: '0.15em' }}>DR. DEBASHIS DAS</div>
          <div style={{ ...t.mono, fontSize: 9, color: t.MONOMUTED, letterSpacing: '0.1em' }}>CONSULTANT PHYSICIAN & DIABETOLOGIST</div>
        </div>
      </Link>
      <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
        {[['PRACTICE', '/'], ['SERVICES', '/services/diabetology'], ['CONDITIONS', '/#conditions'], ['ARTICLES', '/articles'], ['CONSULT', '/book']].map(([lbl, href]) => (
          <Link key={lbl} href={href} style={{ ...t.mono, fontSize: 10, color: t.TXT2, letterSpacing: '0.13em', textDecoration: 'none' }}>{lbl}</Link>
        ))}
        <ThemeToggle />
        <Link href="/book" style={{ ...t.mono, padding: '8px 20px', background: 'transparent', border: `1px solid rgba(245,158,11,0.5)`, color: t.A, fontSize: 10, letterSpacing: '0.15em', borderRadius: 2, textDecoration: 'none' }}>BOOK</Link>
      </div>
    </nav>
  )
}
