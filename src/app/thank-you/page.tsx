'use client'
import Link from 'next/link'
import { ThemeProvider, useTheme } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'

function ThanksPage() {
  const { t } = useTheme()
  return (
    <div style={{ background: t.BG, color: t.TXT, minHeight: '100vh', fontFamily: 'system-ui,sans-serif', transition: 'background .45s' }}>
      <Navbar />
      <section style={{ padding: '160px 5% 100px', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(245,158,11,0.1)', border: '2px solid rgba(245,158,11,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
            <span style={{ fontSize: 28 }}>✓</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: '-0.04em', color: t.TXT, fontFamily: 'Georgia,serif', marginBottom: 14 }}>
            Consultation <span style={{ color: t.A }}>Confirmed</span>
          </h1>
          <p style={{ fontSize: 15, color: t.TXT2, lineHeight: 1.8, marginBottom: 36 }}>
            Your booking has been received. Dr. Das will reach out within a few hours to confirm your exact slot and share the meeting link or clinic address.
          </p>
          <Link href="/" style={{ ...t.mono as any, padding: '12px 32px', background: t.A, color: '#1a0a00', fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', borderRadius: 2, textDecoration: 'none' }}>
            BACK TO HOME
          </Link>
        </div>
      </section>
    </div>
  )
}

export default function ThankYou() {
  return <ThemeProvider><ThanksPage /></ThemeProvider>
}
